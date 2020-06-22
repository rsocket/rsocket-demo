package io.rsocket.demo.client

import ch.qos.logback.classic.Level
import ch.qos.logback.classic.Logger
import com.baulsupp.oksocial.output.ConsoleHandler
import com.baulsupp.oksocial.output.SimpleResponse
import com.baulsupp.oksocial.output.SimpleResponseExtractor
import com.baulsupp.okurl.kotlin.execute
import io.netty.buffer.ByteBufAllocator
import io.netty.buffer.ByteBufUtil
import io.netty.buffer.CompositeByteBuf
import io.rsocket.Payload
import io.rsocket.RSocket
import io.rsocket.core.RSocketConnector
import io.rsocket.demo.twitter.TwitterController
import io.rsocket.demo.twitter.TwitterController.Companion.parseTweet
import io.rsocket.metadata.CompositeMetadataCodec
import io.rsocket.metadata.TaggingMetadataCodec
import io.rsocket.metadata.WellKnownMimeType
import io.rsocket.metadata.WellKnownMimeType.MESSAGE_RSOCKET_ROUTING
import io.rsocket.transport.netty.client.WebsocketClientTransport
import io.rsocket.util.DefaultPayload
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.collect
import kotlinx.coroutines.flow.flatMapMerge
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.flow.mapNotNull
import kotlinx.coroutines.reactive.asFlow
import okhttp3.Request
import okio.ByteString.Companion.toByteString
import org.slf4j.Logger.ROOT_LOGGER_NAME
import org.slf4j.LoggerFactory
import java.net.URI

@ExperimentalCoroutinesApi
@OptIn(FlowPreview::class)
suspend fun main() {
  val parentLogger = LoggerFactory.getLogger(ROOT_LOGGER_NAME) as Logger
  parentLogger.level = Level.OFF

  val ws: WebsocketClientTransport =
    WebsocketClientTransport.create(URI.create("wss://rsocket-demo.herokuapp.com/rsocket"))

  val clientRSocket: Flow<RSocket> = RSocketConnector.create()
      .metadataMimeType(WellKnownMimeType.MESSAGE_RSOCKET_COMPOSITE_METADATA.string)
      .dataMimeType(WellKnownMimeType.APPLICATION_JSON.string)
      .connect(ws)
      .asFlow()

  val sundayTweets = clientRSocket.flatMapMerge {
    searchTweets(it, "Trump")
  }

  val console = ConsoleHandler(SimpleResponseExtractor)

  sundayTweets
      .mapNotNull {
        val user = it.user
        user?.profile_image_url_https?.let {
          val req = Request.Builder().url(it).build()
          val response = TwitterController.client.execute(req)
          val bytes = response.body!!.bytes().toByteString()
          Pair(user.screen_name!!, bytes)
        }
      }
      .collect {
//        console.showOutput(SimpleResponse(mimeType = WellKnownMimeType.IMAGE_JPEG.string, source = it.second))
        println(it.first + " " + it.second.hex().subSequence(0, 80 - it.first.length))
      }
}

@OptIn(ExperimentalCoroutinesApi::class)
private fun searchTweets(
  it: RSocket,
  query: String
) =
  it.requestStream(searchTweetsQuery(query))
      .asFlow()
      .map { parseTweet(it.dataUtf8) }

private fun searchTweetsQuery(query: String): Payload {
  val md = springRoute("searchTweets")
  return DefaultPayload.create(query.toByteArray(), md)
}

private fun springRoute(route: String): ByteArray? {
  val compositeByteBuf = CompositeByteBuf(ByteBufAllocator.DEFAULT, false, 1);
  val routingMetadata =
    TaggingMetadataCodec.createRoutingMetadata(ByteBufAllocator.DEFAULT, listOf(route))
  CompositeMetadataCodec.encodeAndAddMetadata(
      compositeByteBuf, ByteBufAllocator.DEFAULT, MESSAGE_RSOCKET_ROUTING, routingMetadata.content
  )
  return ByteBufUtil.getBytes(compositeByteBuf)
}
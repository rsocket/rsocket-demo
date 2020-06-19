package io.rsocket.demo

import io.rsocket.AbstractRSocket
import io.rsocket.Payload
import io.rsocket.RSocket
import io.rsocket.RSocketFactory
import io.rsocket.transport.netty.server.WebsocketRouteTransport
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono
import reactor.netty.http.server.HttpServer
import reactor.netty.http.server.HttpServerRoutes
import java.io.File
import java.nio.charset.StandardCharsets
import java.nio.file.Path
import java.time.Duration
import java.util.function.Consumer

object App {
  @JvmStatic fun main(args: Array<String>) {
    val twitter = TwitterFactory.connect()

    val httpServer = HttpServer.create().port(port())

    val routeSetup = Consumer { routes: HttpServerRoutes ->
      routes.file("/", webPath("src/main/resources/web/index.html"))
      routes.directory("/public", webPath("src/main/resources/web/public"))
    }
    val server = RSocketFactory.receive()
        .resume()
        .acceptor { _, _ ->
          createServerRequestHandler()
        }
        .transport(WebsocketRouteTransport(httpServer, routeSetup, "/ws"))
        .start()
        .block()

    println("running on " + port())

    server!!.onClose().block(Duration.ofDays(3650))
  }

  private fun webPath(pathname: String): Path = File(pathname).absoluteFile.toPath()

  private fun port(): Int = Integer.getInteger("server.port", 8080)!!

  private fun createServerRequestHandler(
  ): Mono<RSocket> = Mono.just(
      object : AbstractRSocket() {
        override fun requestResponse(payload: Payload): Mono<Payload> {
          return Mono.just(payload)
        }

        override fun requestStream(payload: Payload): Flux<Payload> {
          val query = StandardCharsets.UTF_8.decode(payload.data).toString()
          return twitterSearch(query).take(10000)
        }
      })

  private fun twitterSearch(query: String): Flux<Payload> = Flux.empty()
//  private fun twitterSearch(query: String, twitter: Twitter): Flux<Payload> = Flux.create(
//      { s ->
//        println("Opening $query")
//        val stream = twitter
//            .streamingOperations()
//            .filter(
//                query,
//                listOf(
//                    object : StreamAdapter() {
//                      override fun onTweet(tweet: Tweet) {
//                        s.next(DefaultPayload.create(tweet.text))
//                      }
//                    }))
//
//        s.onCancel {
//          println("Closing $query")
//          stream.close()
//        }
//      },
//      FluxSink.OverflowStrategy.DROP)
}

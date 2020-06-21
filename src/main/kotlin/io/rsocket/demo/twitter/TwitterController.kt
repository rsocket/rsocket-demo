package io.rsocket.demo.twitter

import com.baulsupp.okurl.authenticator.AuthenticatingInterceptor
import com.baulsupp.okurl.credentials.TokenValue
import com.baulsupp.okurl.kotlin.execute
import com.baulsupp.okurl.kotlin.request
import com.baulsupp.okurl.moshi.Rfc3339InstantJsonAdapter
import com.baulsupp.okurl.services.mapbox.model.MapboxLatLongAdapter
import com.baulsupp.okurl.services.twitter.TwitterAuthInterceptor
import com.squareup.moshi.Moshi
import com.squareup.moshi.adapters.Rfc3339DateJsonAdapter
import com.squareup.moshi.kotlin.reflect.KotlinJsonAdapterFactory
import io.rsocket.demo.twitter.model.Tweet
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.mapNotNull
import kotlinx.coroutines.flow.onCompletion
import okhttp3.OkHttpClient
import org.springframework.messaging.handler.annotation.MessageMapping
import org.springframework.stereotype.Controller
import java.nio.charset.StandardCharsets
import java.time.Instant
import java.util.Date

@ExperimentalCoroutinesApi
@Controller("twitter")
class TwitterController {
  @MessageMapping("searchTweets")
  suspend fun requestResponse(query: String?): Flow<Tweet> {
    val s = client.execute(
        request(
            url = "https://stream.twitter.com/1.1/statuses/filter.json?track=$query",
            tokenSet = TokenValue(twitterAuth)
        )
    )

    val r = s.body!!.source()
        .inputStream()
        .bufferedReader(StandardCharsets.UTF_8)

    return r.lineSequence()
        .asFlow()
        .onCompletion {
          s.close()
        }
        .mapNotNull {
          @Suppress("BlockingMethodInNonBlockingContext")
          parseTweet(it)
        }
  }

  companion object {
    val moshi = Moshi.Builder()
        .add(MapboxLatLongAdapter())
        .add(KotlinJsonAdapterFactory())
        .add(Date::class.java, Rfc3339DateJsonAdapter().nullSafe())
        .add(Instant::class.java, Rfc3339InstantJsonAdapter.nullSafe())
        .build()!!

    fun parseTweet(it: String): Tweet = tweetAdapter.fromJson(it)!!

    val tweetAdapter = moshi.adapter(Tweet::class.java)

    val twitterToken by lazy { System.getenv("TWITTER_TOKEN") }
    val twitterAuth by lazy { TwitterAuthInterceptor().serviceDefinition.parseCredentialsString(twitterToken) }

    val client = OkHttpClient.Builder()
        .addInterceptor(
            AuthenticatingInterceptor(com.baulsupp.okurl.credentials.CredentialsStore.NONE)
        )
//        .eventListenerFactory(LoggingEventListener.Factory())
        .build()
  }
}

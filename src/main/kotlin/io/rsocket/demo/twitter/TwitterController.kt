package io.rsocket.demo.twitter

import com.baulsupp.okurl.authenticator.AuthenticatingInterceptor
import com.baulsupp.okurl.credentials.TokenValue
import com.baulsupp.okurl.kotlin.execute
import com.baulsupp.okurl.kotlin.request
import com.baulsupp.okurl.moshi.Rfc3339InstantJsonAdapter
import com.baulsupp.okurl.services.mapbox.model.MapboxLatLongAdapter
import com.baulsupp.okurl.services.twitter.TwitterAuthInterceptor
import com.baulsupp.okurl.services.twitter.TwitterCredentials
import com.squareup.moshi.Moshi
import com.squareup.moshi.adapters.Rfc3339DateJsonAdapter
import com.squareup.moshi.kotlin.reflect.KotlinJsonAdapterFactory
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.mapNotNull
import okhttp3.OkHttpClient
import org.springframework.messaging.handler.annotation.MessageMapping
import org.springframework.stereotype.Controller
import java.nio.charset.StandardCharsets
import java.time.Instant
import java.util.Date

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
        .mapNotNull {
//          print("T")
//          System.out.flush()
          tweetAdapter.fromJson(it)
        }
  }

  companion object {
    val moshi = Moshi.Builder()
        .add(MapboxLatLongAdapter())
        .add(KotlinJsonAdapterFactory())
        .add(Date::class.java, Rfc3339DateJsonAdapter().nullSafe())
        .add(Instant::class.java, Rfc3339InstantJsonAdapter.nullSafe())
        .build()!!

    val tweetAdapter = moshi.adapter(Tweet::class.java)

    val twitterToken = System.getenv("TWITTER_TOKEN")
    val twitterAuth = TwitterAuthInterceptor().serviceDefinition.parseCredentialsString(twitterToken)

    val client = OkHttpClient.Builder()
        .addInterceptor(
            AuthenticatingInterceptor(com.baulsupp.okurl.credentials.CredentialsStore.NONE)
        )
        .build()
  }
}

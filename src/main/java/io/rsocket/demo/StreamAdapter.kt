package io.rsocket.demo

import org.springframework.social.twitter.api.StreamDeleteEvent
import org.springframework.social.twitter.api.StreamListener
import org.springframework.social.twitter.api.StreamWarningEvent
import org.springframework.social.twitter.api.Tweet

open class StreamAdapter : StreamListener {
  override fun onTweet(tweet: Tweet) {}

  override fun onDelete(deleteEvent: StreamDeleteEvent) {}

  override fun onLimit(numberOfLimitedTweets: Int) {}

  override fun onWarning(warningEvent: StreamWarningEvent) {}
}

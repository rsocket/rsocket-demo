package io.rsocket.demo;

import org.springframework.social.twitter.api.StreamDeleteEvent;
import org.springframework.social.twitter.api.StreamListener;
import org.springframework.social.twitter.api.StreamWarningEvent;
import org.springframework.social.twitter.api.Tweet;

public class StreamAdapter implements StreamListener {
  @Override public void onTweet(Tweet tweet) {
  }

  @Override public void onDelete(StreamDeleteEvent deleteEvent) {
  }

  @Override public void onLimit(int numberOfLimitedTweets) {
  }

  @Override public void onWarning(StreamWarningEvent warningEvent) {
  }
}

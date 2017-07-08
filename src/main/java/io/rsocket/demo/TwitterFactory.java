package io.rsocket.demo;

import org.springframework.social.connect.Connection;
import org.springframework.social.oauth1.OAuthToken;
import org.springframework.social.twitter.connect.TwitterConnectionFactory;

public class TwitterFactory {
  public static Connection<org.springframework.social.twitter.api.Twitter> connect() {
    TwitterConnectionFactory c = new TwitterConnectionFactory(System.getenv("TWITTER_CONSUMER_KEY"),
        System.getenv("TWITTER_CONSUMER_SECRET"));
    return c.createConnection(new OAuthToken(System.getenv("TWITTER_TOKEN"),
        System.getenv("TWITTER_TOKEN_SECRET")));
  }
}

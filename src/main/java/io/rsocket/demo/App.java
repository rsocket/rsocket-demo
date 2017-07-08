package io.rsocket.demo;

import io.rsocket.AbstractRSocket;
import io.rsocket.Closeable;
import io.rsocket.ConnectionSetupPayload;
import io.rsocket.Payload;
import io.rsocket.RSocket;
import io.rsocket.RSocketFactory;
import io.rsocket.transport.netty.server.WebsocketServerTransport;
import io.rsocket.util.PayloadImpl;
import java.nio.charset.StandardCharsets;
import java.time.Duration;
import java.util.Arrays;
import org.springframework.social.connect.Connection;
import org.springframework.social.twitter.api.Stream;
import org.springframework.social.twitter.api.Tweet;
import org.springframework.social.twitter.api.Twitter;
import reactor.core.publisher.Flux;
import reactor.core.publisher.FluxSink;
import reactor.core.publisher.Mono;

public class App {
  public static void main(String[] args) {
    Connection<org.springframework.social.twitter.api.Twitter> twitter = TwitterFactory.connect();

    Closeable server = RSocketFactory.receive()
        .acceptor(
            (setupPayload, reactiveSocket) -> createServerRequestHandler(twitter.getApi(), setupPayload))
        .transport(WebsocketServerTransport.create(port()))
        .start()
        .block();

    System.out.println("running on " + port());

    server.onClose().block(Duration.ofDays(3650));
  }

  private static int port() {
    return Integer.getInteger("server.port", 8080);
  }

  private static Mono<RSocket> createServerRequestHandler(Twitter twitter, ConnectionSetupPayload setupPayload) {

    return Mono.just(
        new AbstractRSocket() {
          @Override
          public Mono<Payload> requestResponse(Payload payload) {
            return Mono.just(payload);
          }

          @Override
          public Flux<Payload> requestStream(Payload payload) {
            String query = StandardCharsets.UTF_8.decode(payload.getData()).toString();
            return Flux.create(s -> {
              System.out.println("Opening " + query);
              Stream stream =
                  twitter.streamingOperations().filter(query, Arrays.asList(new StreamAdapter() {
                    @Override public void onTweet(Tweet tweet) {
                      s.next(new PayloadImpl(tweet.getText()));
                      //if (s.requestedFromDownstream() == 0) {
                      //  stream.close();
                      //}
                    }
                  }));

              //s.onRequest(l -> stream.open());
              s.onCancel(() -> {
                System.out.println("Closing " + query);
                stream.close();
              });
            }, FluxSink.OverflowStrategy.DROP);
          }
        });
  }
}

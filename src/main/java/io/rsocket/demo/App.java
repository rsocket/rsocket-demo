package io.rsocket.demo;

import io.rsocket.AbstractRSocket;
import io.rsocket.Closeable;
import io.rsocket.ConnectionSetupPayload;
import io.rsocket.Payload;
import io.rsocket.RSocket;
import io.rsocket.RSocketFactory;
import io.rsocket.transport.netty.server.WebsocketServerTransport;
import java.time.Duration;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public class App {
  public static void main(String[] args) {
    Closeable server = RSocketFactory.receive()
        .acceptor(
            (setupPayload, reactiveSocket) -> createServerRequestHandler(setupPayload))
        .transport(WebsocketServerTransport.create(port()))
        .start()
        .block();

    System.out.println("running on " + port());

    server.onClose().block(Duration.ofDays(3650));
  }

  private static int port() {
    return Integer.getInteger("server.port", 8080);
  }

  private static Mono<RSocket> createServerRequestHandler(ConnectionSetupPayload setupPayload) {

    return Mono.just(
        new AbstractRSocket() {
          @Override
          public Mono<Payload> requestResponse(Payload payload) {
            return Mono.just(payload);
          }

          @Override
          public Flux<Payload> requestStream(Payload payload) {
            return Flux.just(payload);
          }
        });
  }
}

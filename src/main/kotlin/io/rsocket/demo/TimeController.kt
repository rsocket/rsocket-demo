package io.rsocket.demo

import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.reactive.asFlow
import org.springframework.messaging.handler.annotation.MessageMapping
import org.springframework.stereotype.Controller
import reactor.core.publisher.Flux
import java.time.Duration.ofMillis
import java.time.Duration.ofSeconds

@Controller("time")
class TimeController {
  @MessageMapping("")
  suspend fun requestResponse(): Flow<String> =
    Flux.interval(ofMillis(0), ofMillis(50))
        .asFlow()
        .map {
          System.currentTimeMillis()
              .toString()
        }
}

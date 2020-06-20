package io.rsocket.demo

import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.reactive.asFlow
import org.springframework.messaging.handler.annotation.MessageMapping
import org.springframework.stereotype.Controller
import reactor.core.publisher.Flux
import java.time.Duration.ofSeconds

@Controller("time")
class TimeController {
  @MessageMapping("")
  suspend fun requestResponse(): Flow<String> =
    Flux.interval(ofSeconds(0), ofSeconds(1))
        .asFlow()
        .map {
          System.currentTimeMillis()
              .toString()
        }
}

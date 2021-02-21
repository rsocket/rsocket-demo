package io.rsocket.demo.timer

import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.reactive.asFlow
import org.springframework.messaging.handler.annotation.MessageMapping
import org.springframework.stereotype.Controller
import reactor.core.publisher.Flux
import java.time.Duration

@Controller
class TimerController() {
  @MessageMapping("timer")
  suspend fun timer(): Flow<Long> {
    return Flux.interval(Duration.ofMillis(500L)).asFlow()
  }
}
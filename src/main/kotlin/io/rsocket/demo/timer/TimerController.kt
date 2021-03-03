package io.rsocket.demo.timer

import io.rsocket.demo.config.RSocketDemoConfig
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.reactive.asFlow
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.messaging.handler.annotation.MessageMapping
import org.springframework.stereotype.Controller
import reactor.core.publisher.Flux
import java.time.Duration

@Controller
class TimerController @Autowired constructor(val properties: RSocketDemoConfig) {
  @MessageMapping(value = ["", "timer"])
  suspend fun timer(): Flow<Long> {
    return Flux.interval(Duration.ofMillis(500L)).asFlow()
  }
}
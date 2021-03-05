package io.rsocket.demo.chat

import io.rsocket.demo.api.Event
import io.rsocket.demo.api.encode
import io.rsocket.demo.config.RSocketDemoConfig
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.first
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.flow.onCompletion
import kotlinx.coroutines.flow.onStart
import kotlinx.coroutines.reactive.asFlow
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.messaging.handler.annotation.DestinationVariable
import org.springframework.messaging.handler.annotation.MessageMapping
import org.springframework.stereotype.Controller
import reactor.core.publisher.Flux.interval
import java.time.Duration.ofMillis

@Controller
class ChatController @Autowired constructor(val properties: RSocketDemoConfig) {
  val people = mutableListOf<String>()

  @MessageMapping(value = ["chat/{roomName}"])
  suspend fun room(
    @DestinationVariable roomName: String,
    events: Flow<Event>
  ): Flow<String> {
    val name = events.first().join?.name ?: "anon"

    return interval(ofMillis(500L)).asFlow()
      .onStart { people.add(name) }
      .onCompletion { people.remove(name) }
      .map {
      Event(type = "$roomName $people $it")
    }.encode()
  }
}
package io.rsocket.demo.setup

import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.messaging.rsocket.RSocketRequester
import org.springframework.messaging.rsocket.annotation.ConnectMapping
import org.springframework.stereotype.Controller

@Controller
class ConnectController {
  val logger: Logger = LoggerFactory.getLogger(ConnectController::class.java)

  @ConnectMapping
  fun handle(requester: RSocketRequester) {
    logger.debug("connected $requester")
  }
}

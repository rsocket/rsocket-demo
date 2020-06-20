package io.rsocket.demo

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class RsocketDemoApplication

fun main(args: Array<String>) {
	runApplication<RsocketDemoApplication>(*args)
}

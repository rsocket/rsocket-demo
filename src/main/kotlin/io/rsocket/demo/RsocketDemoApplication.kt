package io.rsocket.demo

import io.rsocket.core.Resume
import io.rsocket.demo.config.RSocketDemoConfig
import org.apache.commons.logging.LogFactory
import org.springframework.beans.factory.annotation.Value
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.context.properties.ConfigurationPropertiesScan
import org.springframework.boot.rsocket.server.RSocketServerCustomizer
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean
import org.springframework.context.event.ContextRefreshedEvent
import org.springframework.context.event.EventListener
import java.time.Duration

@SpringBootApplication
@ConfigurationPropertiesScan("io.rsocket.demo.config")
class RsocketDemoApplication(val properties: RSocketDemoConfig) {
	private val logger = LogFactory.getLog(RsocketDemoApplication::class.java)

	@Value("\${spring.profiles.active:}")
	private val activeProfile: String? = null

	@EventListener
	fun onApplicationEvent(event: ContextRefreshedEvent) {
		logger.info("Started: $activeProfile ${properties.tokens.twitter?.length}")
	}

	@Bean
	fun rSocketResume(): RSocketServerCustomizer {
		return RSocketServerCustomizer {
			logger.info("Configuring resume for 15 minutes")
			it.resume(Resume()
				.sessionDuration(Duration.ofMinutes(15))
			)
		}
	}
}

fun main(args: Array<String>) {
	runApplication<RsocketDemoApplication>(*args)
}

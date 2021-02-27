package io.rsocket.demo

import io.rsocket.core.Resume
import io.rsocket.resume.InMemoryResumableFramesStore
import org.apache.commons.logging.LogFactory
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.rsocket.server.RSocketServerCustomizer
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean
import java.time.Duration

@SpringBootApplication
class RsocketDemoApplication {
	private val logger = LogFactory.getLog(RsocketDemoApplication::class.java)

	@Bean
	fun rSocketResume(): RSocketServerCustomizer = RSocketServerCustomizer {
		logger.info("Configuring resume for 15 minutes")
		it.resume(Resume()
			.sessionDuration(Duration.ofMinutes(15))
			.cleanupStoreOnKeepAlive()
			.storeFactory { InMemoryResumableFramesStore("server", 50_000) }
		)
	}
}

fun main(args: Array<String>) {
	runApplication<RsocketDemoApplication>(*args)
}

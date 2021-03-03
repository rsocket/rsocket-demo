package io.rsocket.demo.config

import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.boot.context.properties.ConstructorBinding

@ConstructorBinding
@ConfigurationProperties("democonfig")
data class RSocketDemoConfig(var url: String, val tokens: Tokens) {
  data class Tokens(var twitter: String? = null)
}
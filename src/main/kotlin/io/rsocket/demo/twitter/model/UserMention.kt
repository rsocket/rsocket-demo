package io.rsocket.demo.twitter.model

data class UserMention(
  val id: Int? = null,
  val id_str: String? = null,
  val indices: List<Int?>? = null,
  val name: String? = null,
  val screen_name: String? = null
)
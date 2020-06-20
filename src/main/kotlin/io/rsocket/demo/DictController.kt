package io.rsocket.demo

import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.withContext
import org.springframework.messaging.handler.annotation.MessageMapping
import org.springframework.stereotype.Controller
import java.io.File

@Controller("dict")
class DictController {
  @MessageMapping("")
  suspend fun requestResponse(): Flow<String> = withContext(Dispatchers.IO) {
    File("/usr/share/dict/words").bufferedReader().lineSequence().asFlow()
  }
}

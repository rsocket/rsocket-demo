package io.rsocket.demo.web

import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.GetMapping

@Controller
class MainController {
    @GetMapping("/")
    fun index(
        model: Model,
        @Value("\${democonfig.siteurl}") siteUrl: String,
        @Value("\${democonfig.rsocketurl}") rsocketUrl: String
    ): String {
        model.addAttribute("siteUrl", siteUrl)
        model.addAttribute("rsocketUrl", rsocketUrl)
        return "index"
    }
}
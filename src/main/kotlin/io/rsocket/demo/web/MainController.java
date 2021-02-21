package io.rsocket.demo.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {
    @GetMapping("/")
    public String index(Model model) {
        model.addAttribute("eventName", "FIFA 2018");
        return "index";
    }
}
package com.example.schedulemaker.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author Gyumin Kim
 * @since 2019-04-15
 */
@Controller
@RequestMapping("/")
public class MainController {

	@GetMapping
	public String main() {
		return "index";
	}
}
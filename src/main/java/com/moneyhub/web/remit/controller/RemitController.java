package com.moneyhub.web.remit.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/remit")
public class RemitController {
	
		@PostMapping("/insert")
		public Map<?,?> insertRemit(@RequestBody String amount ){
			Map<String, String> map = new HashMap<String, String>();
			System.out.println("ajax가 보낸 deal"+ amount);
			map.put("amount", amount);
			System.out.println(map.get("amount")+"맵에 담긴 deal");
			return map;
		}
}

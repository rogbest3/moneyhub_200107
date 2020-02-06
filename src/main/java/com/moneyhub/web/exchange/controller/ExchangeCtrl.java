package com.moneyhub.web.exchange.controller;

import java.util.Map;
import java.util.function.Consumer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.moneyhub.web.exchange.domains.Exchange;
import com.moneyhub.web.exchange.mappers.ExchangeMapper;
import com.moneyhub.web.exchange.services.ExchangeService;
import com.moneyhub.web.pxy.Box;
import com.moneyhub.web.pxy.Proxy;


@RestController
@RequestMapping("/exchange")
public class ExchangeCtrl extends Proxy {

	@Autowired Exchange exc;
	@Autowired ExchangeMapper exMapper;
	@Autowired Box<Object> box;
	@Autowired ExchangeService exService;

	@PostMapping("/insert")
	public Map<?, ?> insertExchange(@RequestBody Exchange exc){
		System.out.println("exchange들어옴???????????"+ exc);
		Consumer<Exchange> c = o -> exMapper.insertEx(o);
		c.accept(exc);
		box.clear();
		box.put("msg", "SUCCESS");
		return box.get();
	}
	
	@GetMapping("/exTrend/{cntcd}")
	public Map<?, ?> exTrend(@PathVariable String cntcd) {
		System.out.println("exTrend 들어옴!!!!!!" + cntcd);
		return exService.ExTrend(cntcd);
	}
	
}
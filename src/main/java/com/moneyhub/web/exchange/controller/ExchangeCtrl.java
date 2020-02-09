package com.moneyhub.web.exchange.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Consumer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.moneyhub.web.cus.domains.Account;
import com.moneyhub.web.exchange.domains.Exchange;
import com.moneyhub.web.exchange.mappers.ExchangeMapper;
import com.moneyhub.web.exchange.services.ExchangeService;
import com.moneyhub.web.pxy.Box;
import com.moneyhub.web.pxy.Proxy;


@RestController
@RequestMapping("/exchange")
public class ExchangeCtrl extends Proxy {

	@Autowired Exchange ex;
	@Autowired ExchangeMapper exMapper;
	@Autowired Box<Object> box;
	@Autowired ExchangeService exService;
	@Autowired Account acc;

	@PostMapping("/insert")
	public Map<?, ?> insertExchange(@RequestBody HashMap<String, Object> exchange){
		System.out.println("exchange들어옴???????????"+ exchange);
		exService.insertExchange(exchange);
		box.clear();
		box.put("msg", "SUCCESS");
		return box.get();
	}
	
	@GetMapping("/extrend/cntcd/{cntcd}")
	public Map<?, ?> exTrend(@PathVariable String cntcd) {
		return exService.ExTrend(cntcd);
	}
	
	@PostMapping("/balanceChg")
	public Map<?, ?> balanceChg(@RequestBody HashMap<String, Object> exchange){
		System.out.println("계좌 현재 잔액 변경 들어옴 여기서 exchange는? - " + exchange);
		exService.balanceChg(exchange);
		box.clear();
		box.put("acc", acc);
		if(acc.getBalance() > 0) {
			box.put("msg", "SUCCESS");
		}else {
			box.put("msg", "FAIL");
		}
		System.out.println("잔액 변경하는 자바 부분에서 box.get() -> " + box.get());
		return box.get();
	}
	
	
	
	
}
package com.moneyhub.web.cus.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.moneyhub.web.cus.domains.Account;
import com.moneyhub.web.cus.domains.AccountHistory;
import com.moneyhub.web.cus.domains.Customer;
import com.moneyhub.web.cus.mappers.AccountMapper;
import com.moneyhub.web.cus.services.AccountService;
import com.moneyhub.web.pxy.Box;
import com.moneyhub.web.pxy.Proxy;


@RestController
@RequestMapping("/account")
public class AccountCtrl extends Proxy {

	/* @Autowired CustomerServiceImpl customerServiceImpl; */
	@Autowired Customer cus;
	@Autowired Box<Object> box;
	@Autowired SqlSession sqlsession;
	@Autowired AccountService accountService;
	@Autowired AccountMapper accMapper;
	@Autowired Account acc;
	@Autowired AccountHistory accHis;

    
	@GetMapping("/getacchis/{cemail}/{cno}")
	public Map<? ,?> getAccHis(@PathVariable HashMap<String,Object> map){
		System.out.println("===========계좌 내역 가져오기" +map); 
		  box.clear();
		  Function<String, AccountHistory> f = t -> accMapper.getAccHis(t);
		  box.put("msg","SUCCESS"); 
		  box.put("accHis", f.apply(map.get("cemail").toString())); 
		  System.out.println("box.get() -----------> "+box.get());
		return box.get();
	}

	
	@PostMapping("/withdrawal")  //출금
	public Map<?, ?> withDrawal(@RequestBody HashMap<String, Object> param){
		System.out.println("계좌 현재 잔액 변경 들어옴 여기서 exchange는? - " + param);
		accountService.withDrawal(param);
		box.clear();
		box.put("acc", accHis);
		
		//EJ 수정 acc -> 히스토리로 연결
		if(accHis.getWithdrawal() > 0) {
			box.put("msg", "SUCCESS");
		}else {
			box.put("msg", "FAIL");
		}
		System.out.println("잔액 변경하는 자바 부분에서 box.get() -> " + box.get());
		return box.get();
	}

}

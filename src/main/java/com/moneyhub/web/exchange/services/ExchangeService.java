package com.moneyhub.web.exchange.services;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Consumer;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.moneyhub.web.cus.domains.Account;
import com.moneyhub.web.cus.domains.Customer;
import com.moneyhub.web.cus.mappers.AccountMapper;
import com.moneyhub.web.exchange.domains.Exchange;
import com.moneyhub.web.exchange.mappers.ExchangeMapper;
import com.moneyhub.web.exr.Exrate;
import com.moneyhub.web.pxy.Box;
import com.moneyhub.web.remit.util.CharUtil;

@Service
public class ExchangeService {
	
	@Autowired ExchangeMapper exMapper;
	@Autowired AccountMapper accMapper;
	@Autowired Box<Object> box;
	@Autowired Exrate exrate;
	@Autowired Exchange exch;
	@Autowired Customer cus;
	@Autowired Account acc;
	
	public void insertExchange(HashMap<String, Object> exchange) {
		System.out.println("exchangeService 들어옴???? -----------" + exchange);
		String mtcn = CharUtil.excuteGenerate();
		exch.setMtcn(mtcn);
		exch.setCemail(exchange.get("cemail").toString());
		exch.setCntcd(exchange.get("cntcd").toString());
		exch.setExchKrw(exchange.get("exchKrw").toString());
		exch.setExchCnt(exchange.get("exchCnt").toString());
		exch.setExFee(1); //수수료율
		Double exrate1 = (Double) exchange.get("exrate");
		exch.setFeeExrate(exrate1 * (exch.getExFee()/100)); //수수료금액
		exch.setMhRate(exrate1 + exch.getFeeExrate()); //수수료 포함된 머니허브 환율 -> 이 환율이 환전 시 사용되는 환율
		String code = "0";
		exch.setChngCausCd(code);
		exch.setTrdStatCd(code);
		System.out.println("최종 ex - " + exch);
		exMapper.insertEx(exch);
	}
	
	public Map<?, ?> ExTrend(String cntcd){
		System.out.println("Exchange.service 들어옴 cntcd - " + cntcd);
		ArrayList<Exrate> list = new ArrayList<>();
		list = exMapper.exTrend(cntcd);
		float sum = 0, avg;
		for(Exrate exlist : list) {
			sum += exlist.getExrate();
		}
		avg = sum / list.size();
		System.out.println("list - " + list);
		box.clear();
		if(list.get(0).getExrate() > avg) {
			box.put("msg","UP");
		}else {
			box.put("msg","DOWN");
		}
		return box.get();
	}

	public void balanceChg(HashMap<String, Object> exchange) {
		System.out.println("Exchange.service balanceChg 들어옴 여기서 exchange는? - " + exchange);
		
		acc.setCemail(exchange.get("cemail").toString());
		System.out.println("balanceChg의 cemail은? " + acc.getCemail());
		
		String stwithdrawal = exch.getExchKrw();
		System.out.println("balanceChg의 stwithdrawl은? " + stwithdrawal);
		
		int withdrawal = Integer.parseInt(stwithdrawal.replaceAll(",", ""));
		System.out.println("balanceChg의 withdrawl은? " + withdrawal);
		
		acc.setWithdrawal(withdrawal);
		System.out.println("acc에 담긴 withdrawl은? " + acc.getWithdrawal()); //여기까지
		
		System.out.println("exchange에 담긴 balance 오브젝트 타입: "+exchange.get("acc").toString());
		String stexchange = exchange.get("acc").toString();
		
		JSONObject json = new JSONObject(stexchange);
		System.out.println("json의 balance"+json.getInt("balance"));
	
		int intbalance = json.getInt("balance");
		System.out.println("balanceChg의 intbalance는?" + intbalance);
		
		int balance = intbalance - withdrawal;
		System.out.println("balanceChg의 balance는?" + balance);
		
		acc.setBalance(balance);
		System.out.println("acc에 담긴 balance는?" + acc.getBalance());
		
		if(acc.getBalance() > 0) {
			Consumer<Account> c = o -> exMapper.balanceChg(acc);
			c.accept(acc);
		}else {
			System.out.println("잔액 부족으로 인해 실패!");
		}
	}
	
}
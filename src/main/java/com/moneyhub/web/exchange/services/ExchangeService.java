package com.moneyhub.web.exchange.services;

import java.util.ArrayList;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.moneyhub.web.exchange.mappers.ExchangeMapper;
import com.moneyhub.web.exr.Exrate;
import com.moneyhub.web.pxy.Box;

@Service
public class ExchangeService {
	
	@Autowired ExchangeMapper exMapper;
	@Autowired Box<Object> box;
	
	public Map<?, ?> ExTrend(String cntcd){
		System.out.println("Exchange.service 탔나여????????");
		ArrayList<Exrate> list = new ArrayList<>();
		list = exMapper.exTrend(cntcd);
		float sum = 0, avg;
		for(Exrate exlist : list) {
			sum += exlist.getExrate();
		}
		avg = sum / list.size();
		box.clear();
		if(list.get(0).getExrate() > avg) {
			System.out.println("상승세임");
			box.put("msg","UP");
		}else {
			System.out.println("하락세임");
			box.put("msg","DOWN");
		}
		System.out.println("box.get()은?????"+box.get());
		return box.get();
	}
}
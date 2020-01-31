package com.moneyhub.web.remit.controller;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.moneyhub.web.cus.Customer;
import com.moneyhub.web.pxy.Box;
import com.moneyhub.web.pxy.Proxy;
import com.moneyhub.web.remit.serviceimpls.RemitServiceImpl;

@RestController
@RequestMapping("/remit")
public class RemitController extends Proxy{
		@Autowired
		private Box<Object> box;
		
		@Autowired
		private RemitServiceImpl remitService; 
		
		@PostMapping("/insert")
		public void insertRemit(@RequestBody HashMap<String, Object> deal){
		System.out.println("ajax가 보낸 deal"+ deal);
		/* remitService.insertRemit(deal); */
		}
}
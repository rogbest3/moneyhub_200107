package com.moneyhub.web.tx;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.moneyhub.web.pxy.CrawlingProxy;

@RestController
@Transactional
@RequestMapping("/tx")
public class TxCtrl {
	
	@Autowired CrawlingProxy crawler;
	@Autowired TxService txService;
	
	@GetMapping("/crawling/kakaofaq")
	public void faqCrawling() {
		System.out.println("FAQ 크롤링 진입");
		txService.crawling();
	}
}

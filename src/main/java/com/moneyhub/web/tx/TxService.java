package com.moneyhub.web.tx;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.moneyhub.web.faq.FAQ;
import com.moneyhub.web.pxy.CrawlingProxy;
import com.moneyhub.web.pxy.KakaoFAQProxy;

@Service
public class TxService {
	@Autowired CrawlingProxy crawler;
	@Autowired TxMapper txMapper;
	@Autowired KakaoFAQProxy kakaoPxy;
	@Autowired FAQ faq;
	
	@Transactional
	public void crawling() {
		crawler.insertCrawling();
	}
	
	@Transactional
	public void insertStore() {

		for(int i=0; i< kakaoPxy.title_stores().length;i++) {
			faq.setTitle(kakaoPxy.title_stores()[i]);
			faq.setContent(kakaoPxy.content_stores()[i]);
			txMapper.insertFAQ(faq);
		}
		
		
	}
}

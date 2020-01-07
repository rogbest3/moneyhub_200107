package com.moneyhub.web.tx;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.moneyhub.web.pxy.CrawlingProxy;

@Service
public class TxService {
	@Autowired CrawlingProxy crawler;
	
	@Transactional
	public void crawling() {
		crawler.insertCrawling();
	}
}

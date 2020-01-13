package com.moneyhub.web.faq;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Supplier;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.moneyhub.web.enums.SQL;
import com.moneyhub.web.pxy.Box;
import com.moneyhub.web.pxy.Inventory;
import com.moneyhub.web.pxy.PageProxy;
import com.moneyhub.web.pxy.Proxy;

@RestController
@RequestMapping("/faqs")
public class FAQCtrl extends Proxy{
	@Autowired Box<Object> box;
	@Autowired FAQMapper faqMapper;
	@Autowired FAQSevice faqService;
	@Autowired PageProxy pager;
	
	@GetMapping("/create/table")
	public Map<?, ?> createTable(){
		faqService.createFAQ();
		box.clear();
		box.put("result", "SUCCESS");
		return box.get();
	}
	
	@GetMapping("/delete/table")
	public Map<?, ?> deleteTable(){
		faqService.deleteFAQ();
		box.clear();
		box.put("result", "SUCCESS");
		return box.get();
	}
	
	@RequestMapping("/truncate/table")
	public Map<?, ?> truncateTable(){
		print("테이블 내용 삭제 진입");
		faqService.truncateFAQ();
		box.clear();
		box.put("result", "SUCCESS");
		return box.get();
	}
	
	@GetMapping("/lists/{nowPage}")
	public Map<?, ?> faqList(@PathVariable String nowPage) {
		print("리스트 진입 - nowPage : " + nowPage);
		int pageSize = 5, blockSize = 5;
		
		pager.setPageSize(pageSize);
		pager.setNowPage(integer(nowPage));
		pager.setBlockSize(blockSize);
		
		return faqService.selectAll();
	}
}

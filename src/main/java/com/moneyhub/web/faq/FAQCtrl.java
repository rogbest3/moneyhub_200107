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
import com.moneyhub.web.pxy.PageProxy;
import com.moneyhub.web.pxy.Proxy;

@RestController
@RequestMapping("/faqs")
public class FAQCtrl extends Proxy{
	@Autowired Box<Object> box;
	@Autowired FAQMapper faqMapper;
	@Autowired PageProxy pager;
	
	@GetMapping("/create/table")
	public Map<?, ?> createTable(){
		HashMap<String, String> map = new HashMap<>();
		map.put("CREATE_FAQ", SQL.CREATE_FAQ.toString());
		print("테이블 생성 쿼리 : \n" + map.get("CREATE_FAQ"));
		Consumer<HashMap<String, String>> c = p -> faqMapper.createFAQ(p);
		c.accept(map);
		map.clear();
		map.put("result", "SUCCESS");
		return map;
	}
	
	@GetMapping("/delete/table")
	public Map<?, ?> deleteTable(){
		HashMap<String, String> map = new HashMap<>();
		map.put("DROP_FAQ", SQL.DROP_FAQ.toString());
		print("테이블 삭제 쿼리 : \n" + map.get("CREATE_FAQ"));
		Consumer<HashMap<String, String>> c = p -> faqMapper.deleteFAQ(p);
		c.accept(map);
		map.clear();
		map.put("result", "SUCCESS");
		return map;
	}
	
	@GetMapping("/lists/{nowPage}")
	public Map<?, ?> faqList(@PathVariable String nowPage) {
		print("리스트 진입 - nowPage : " + nowPage);
		int pageSize = 5, blockSize = 5;
		
		pager.setPageSize(pageSize);
		pager.setNowPage(integer(nowPage));
		pager.setBlockSize(blockSize);
		
		pager.paging();
		print(pager.toString());
		
		Function<PageProxy, ArrayList<FAQ>> f = t -> faqMapper.selectAll(t);
	//	System.out.println("목록 : " + f.apply(pager).toString());
		
		box.put("pager", pager);
		box.put("faq", f.apply(pager));
		return box.get();
	}
}

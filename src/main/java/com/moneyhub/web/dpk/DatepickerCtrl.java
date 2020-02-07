package com.moneyhub.web.dpk;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Supplier;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.moneyhub.web.enums.SQL;
import com.moneyhub.web.faq.FAQ;
import com.moneyhub.web.pxy.Box;
import com.moneyhub.web.pxy.PageProxy;
import com.moneyhub.web.pxy.Proxy;

@RestController
@RequestMapping("/datepicker")
public class DatepickerCtrl extends Proxy{
	@Autowired Box<Object> box;
	@Autowired DatepickerMapper dpkMapper;
	@Autowired DatepickerService dpkService;

	@GetMapping("/create/table")
	public Map<?, ?> createTable(){
//		faqService.createFAQ();
		print("datepicker 테이블 생성 진입");
		box.clear();
		box.put("CREATE_DATEPICKER", SQL.CREATE_DATEPICKER.toString());
		Consumer<HashMap<String, Object>> c = t -> dpkMapper.createDatepicker(t);
		c.accept(box.get());
		box.clear();
		box.put("result", "SUCCESS");
		return box.get();
	}
	
	@GetMapping("/delete/table")
	public Map<?, ?> deleteTable(){
//		faqService.deleteFAQ();
		print("datepicker 테이블 삭제 진입");
		box.clear();
		box.put("DROP_DATEPICKER", SQL.DROP_DATEPICKER.toString());
		Consumer<HashMap<String, Object>> c = t -> dpkMapper.deleteDatepicker(t);
		c.accept(box.get());
		box.clear();
		box.put("result", "SUCCESS");
		return box.get();
	}
	
	@GetMapping("/truncate/table")
	public Map<?, ?> truncateTable(){
		print("datepicker 테이블 내용 삭제 진입");
		box.clear();
		box.put("TRUNCATE_DATEPICKER", SQL.TRUNCATE_DATEPICKER.toString());
		Consumer<HashMap<String, Object>> c = t -> dpkMapper.truncateDatepicker(t);
		c.accept(box.get());
		box.clear();
		box.put("result", "SUCCESS");
		return box.get();
	}
	
	@PostMapping("/insert/holiday")
	public Map<?, ?> holidayInsert(@RequestBody ArrayList<Datepicker> paramList){
		System.out.println("datepicker Holiday insert 진입 - " + paramList.size());
		System.out.println(paramList);
		dpkService.insertHoliday(paramList);
		box.put("result", "SUCCESS");
		return box.get();
	}
	@GetMapping("/selectall")
	public Map<?, ?> selectAll(){
		System.out.println("datepicker selectAll 진입");
		
		Supplier<ArrayList<Datepicker>> f = () -> dpkMapper.selectAll();	
		box.put("dpk", f.get());
		print(box.get("dpk").toString());
		
		return box.get();
	}
}

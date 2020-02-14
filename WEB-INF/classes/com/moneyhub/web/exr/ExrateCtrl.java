package com.moneyhub.web.exr;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.moneyhub.web.enums.SQL;
import com.moneyhub.web.pxy.Box;
import com.moneyhub.web.pxy.Proxy;

@RestController
@RequestMapping("/exrate")
public class ExrateCtrl extends Proxy{
	@Autowired ExrateSevice exService;
	@Autowired Box<Object> box;
	@Autowired Exrate exrate;
	
	@GetMapping("/exchangetest/{bdate}")
	public Map<?, ?> exchangeTestExrate(@PathVariable String bdate){
//		print("exchangetest 진입 - " + bdate);
		return exService.exchangeTestSelect(bdate);
	}
	
	@GetMapping("/search/cntcd/{cntcd}")
	public Map<?, ?> cntcdSearchExrate(@PathVariable String cntcd){
//		print("cntcd search 진입 - cntcd : " + cntcd);
		box.clear();
		box.put("exlist", exService.cntcdSearchExrate(cntcd));
//		print(box.get().toString());
		return box.get();
	}
	
	@GetMapping("/search/bdate/{bdate}")
	public Map<?, ?> bdateSearchExrate(@PathVariable String bdate){
//		print("bdate search 진입 - bdate : " + bdate);
		box.clear();
		box.put("exlist", exService.bdateSearchExrate(bdate));
//		print(box.get().toString());
		return box.get();
	}
	
	@PostMapping("/insert/api")
	public Map<?, ?> insertExrate(@RequestBody HashMap<String, Exrate[]> paramMap){
//		print("insert 진입 - list : " + paramMap.get("paramList").length);
//		print(paramMap.get("paramList").toString());
		exService.insertExrate(paramMap.get("paramList"));
		box.put("result", "SUCCESS");
		return box.get();
	}	
	
	@GetMapping("/create/table")//
	public Map<?, ?> createTable(){
//		print("테이블 생성 진입");
		HashMap<String, String> map = new HashMap<>();
		map.put("CREATE_EXRATE", SQL.CREATE_EXRATE.toString());
		exService.createExrate(map);
		
		map.clear();
		map.put("result", "SUCCESS");
		return map;
	}
	
	@GetMapping("/delete/table")
	public Map<?, ?> deleteTable(){
//		print("테이블 삭제 진입");
		HashMap<String, String> map = new HashMap<>();
		map.put("DROP_EXRATE", SQL.DROP_EXRATE.toString());
		exService.deleteExrate(map);
		map.clear();
		map.put("result", "SUCCESS");
		return map;
	}
	
	@GetMapping("/truncate/table")
	public Map<?, ?> truncateTable(){
//		print("테이블 내용 삭제 진입");
		HashMap<String, String> map = new HashMap<>();
		map.put("TRUNCATE_EXRATE", SQL.TRUNCATE_EXRATE.toString());
		exService.truncateExrate(map);
		
		map.clear();
		map.put("result", "SUCCESS");
		return map;
	}
}

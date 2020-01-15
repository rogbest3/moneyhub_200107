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
import org.springframework.web.bind.annotation.PathVariable;
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
//	static final SimpleDateFormat dt = new SimpleDateFormat("yyyy-MM-dd");

	@Autowired ExrateSevice exService;
	@Autowired Box<Object> box;
	@Autowired Exrate exrate;
	
	@RequestMapping("/create/table")//
	public Map<?, ?> createTable(){
		print("테이블 생성 진입");
		HashMap<String, String> map = new HashMap<>();
		map.put("CREATE_EXRATE", SQL.CREATE_EXRATE.toString());
		exService.createExrate(map);
		
		map.clear();
		map.put("result", "SUCCESS");
		return map;
	}
	
	@RequestMapping("/search/{cntcd}")
	public Map<?, ?> searchExrate(@PathVariable String cntcd){
		print("search 진입 - cntcd : " + cntcd);
		ArrayList<Exrate> list = new ArrayList<>();
		list = exService.searchExrate(cntcd);
		box.clear();
		box.put("exlist", list);
		print(box.get().toString());
		return box.get();
	}
	
	@RequestMapping("/insert/api")
	public Map<?, ?> insertExrate(@RequestParam Map<String, String> paramMap){
//	public void insertExrate(@RequestBody List<Object> paramMap){
		print("insert 진입 - list : " + paramMap.size());
		HashMap<String, String> map = new HashMap<>();
		paramMap.forEach((k, v) -> System.out.println(String.format("%s - %s\n ", k, v)));
	//	paramMap.forEach( System.out :: println);
		print("============================");

		exService.insertExrate(paramMap);
		
		map.put("result", "SUCCESS");
		return map;
	}	
	
	@RequestMapping("/delete/table")
	public Map<?, ?> deleteTable(){
		print("테이블 삭제 진입");
		HashMap<String, String> map = new HashMap<>();
		map.put("DROP_EXRATE", SQL.DROP_EXRATE.toString());
		exService.deleteExrate(map);
		
		map.clear();
		map.put("result", "SUCCESS");
		return map;
	}
	
	@RequestMapping("/truncate/table")
	public Map<?, ?> truncateTable(){
		print("테이블 내용 삭제 진입");
		HashMap<String, String> map = new HashMap<>();
		map.put("TRUNCATE_EXRATE", SQL.TRUNCATE_EXRATE.toString());
		exService.truncateExrate(map);
		
		map.clear();
		map.put("result", "SUCCESS");
		return map;
		
	}
}

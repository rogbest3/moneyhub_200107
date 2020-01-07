package com.moneyhub.web.cus;

import java.util.Map;
import java.util.function.Consumer;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.moneyhub.web.pxy.Box;

@RestController
@RequestMapping("/customers")
public class CustomerCtrl {
	
	@Autowired Customer cus;
	@Autowired CustomerMapper cusMapper;
	@Autowired Box<Object> box;
	
	@PostMapping("/login")
	public Map<?, ?> login(@RequestBody Customer param){
		System.out.println(param.toString());
		Function<Customer, Customer> f = t -> cusMapper.login(t);
		cus = f.apply(param);
	//	System.out.println(cus.getCemail());

		String result = ( cus != null ) ? "SUCCESS" : "FAIL";
		box.clear();
		box.put("msg", result);
		box.put("cus", cus);
		System.out.println(box.get());
		
		return box.get();
	}
	//
	
	@PostMapping("/")
	public Map<?, ?> join(@RequestBody Customer param) {
		System.out.println("join 들어옴");
		System.out.println(param.toString());
		Consumer<Customer> c = o -> cusMapper.join(o);
		c.accept(param);

		box.clear();
		box.put("msg", "SUCCESS");
		return box.get();
	}
	
	@GetMapping("/existid/{cemail}")
	public Map<?, ?> existId(@PathVariable String cemail){
		System.out.println("existid 들어옴");
		String result = "";
		Function<String, Integer> f = o -> cusMapper.existId(o);

		box.clear();
		box.put("msg", ( f.apply(cemail) != 0 ) ? "Y" : "N");
		System.out.println(box.get());
		return box.get();
	}
	
}

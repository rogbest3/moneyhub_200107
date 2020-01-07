package com.moneyhub.web.pxy;

import java.util.HashMap;
import java.util.List;
import java.util.function.Function;

import org.springframework.stereotype.Component;

@Component
public class Box<T> {
	HashMap<String, T> box;
	
	public Box() {
		box = new HashMap<>();
	}
	
	public void clear() {
		box.clear();
	}
	
	public void put(String s, T t) {
		box.put(s, t);
	}
	
	public void put(List<String> x, Inventory<T> y) {
		
		box = new HashMap<>();
		for(int i=0; i<x.size(); i++) {
			box.put(x.get(i), y.get(i));
		}
		
		box.forEach((k, v)
				-> System.out.println(
					String.format("%s : %s", k, v)));
	}
	
	public T get(String k) {
		Function<String, T> f = o -> box.get(o);
		return f.apply(k);
	}
	
	public HashMap<String, T> get(){		
		return box;
	}
	
	public int size() {
		return box.size();
	}
}

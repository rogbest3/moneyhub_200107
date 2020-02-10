package com.moneyhub.web.exr;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Consumer;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.moneyhub.web.pxy.Box;
import com.moneyhub.web.pxy.ExrateProxy;
import com.moneyhub.web.pxy.Inventory;

@Service
public class ExrateSevice {
	@Autowired Exrate exrate;
	@Autowired ExrateMapper exrateMapper;
	@Autowired ExrateProxy exPxy;
	@Autowired Box<Object> box;
	
	public Map<?, ?> exchangeTestSelect(String bdate){
	
		ArrayList<Exrate> inven = exrateMapper.exchangeTestSelect();
		ArrayList<Exrate> usdList = new ArrayList<>();
		ArrayList<Exrate> eurList = new ArrayList<>();
		ArrayList<Exrate> cnyList = new ArrayList<>();
		ArrayList<Exrate> jpyList = new ArrayList<>();
		ArrayList<Exrate> audList = new ArrayList<>();
		
		for(Exrate e : inven) {
			if( bdate.compareTo(e.getBdate()) >= 0) {
				switch (e.getCntcd()) {
				case "USD":
//					System.out.println( e.getBdate() + "- 비교값 : " + );
					usdList.add(e);
					break;
				case "EUR":
					eurList.add(e);
					break;
				case "CNY":
					cnyList.add(e);
					break;
				case "JPY":
					jpyList.add(e);
					break;
				case "AUD":
					audList.add(e);
					break;
				}
			}
		}

		box.clear();
		box.put("usdRate", exPxy.sortDuplExrate(usdList));
		box.put("eurRate", exPxy.sortDuplExrate(eurList));
		box.put("cnyRate", exPxy.sortDuplExrate(cnyList));
		box.put("jpyRate", exPxy.sortDuplExrate(jpyList));
		box.put("audRate", exPxy.sortDuplExrate(audList));

		return box.get();
	}
	
	@Transactional
	public void insertExrate(Exrate[] paramList) {
		Consumer<Exrate> c = p -> exrateMapper.insertExrate(p);
		for(int i = 0; i<paramList.length; i++) {
			exrate = paramList[i];
			exrate.setCrtmem("KMK");
			c.accept(exrate);
		}
	}	

	public ArrayList<Exrate> cntcdSearchExrate(String s){	
		Function<String, ArrayList<Exrate>> f = t -> exrateMapper.cntcdSearchExrate(t);
		return f.apply(s);
	}
	
	public ArrayList<Exrate> bdateSearchExrate(String s){	
		Function<String, ArrayList<Exrate>> f = t -> exrateMapper.bdateSearchExrate(t);
		return f.apply(s);
	}
	
	public void createExrate(HashMap<String, String> map) {
		Consumer<HashMap<String, String>> c = p -> exrateMapper.createExrate(p);
		c.accept(map);
	}
	
	public void deleteExrate(HashMap<String, String> map) {
		Consumer<HashMap<String, String>> c = p -> exrateMapper.deleteExrate(p);
		c.accept(map);
	}
	
	public void truncateExrate(HashMap<String, String> map) {
		Consumer<HashMap<String, String>> c = p -> exrateMapper.truncateExrate(p);
		c.accept(map);
	}
}
	

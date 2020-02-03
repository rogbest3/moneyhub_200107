package com.moneyhub.web.remit.serviceimpls;

import java.util.ArrayList;
import java.util.Map;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.moneyhub.web.pxy.Box;
import com.moneyhub.web.pxy.Inventory;
import com.moneyhub.web.pxy.PageProxy;
import com.moneyhub.web.pxy.Proxy;
import com.moneyhub.web.remit.domains.TRDHR;
import com.moneyhub.web.remit.mappers.TRDHRMapper;
import com.moneyhub.web.remit.services.TRDHRService;

@Service
public class TRDHRServiceImpl implements TRDHRService{
	@Autowired Proxy pxy;
	@Autowired Box<Object> box;
	@Autowired Inventory<Object> inventory;
	@Autowired TRDHRMapper trdhrMapper;
	@Autowired PageProxy pager;
	
	public Map<?, ?> selectAll(){
		pager.setRowCount(countTRDHR());
		pager.paging();
		pxy.print(pager.toString());
		Function<PageProxy, ArrayList<TRDHR>> f = t -> trdhrMapper.selectAll(t);	
		box.put("pager", pager);
		box.put("trdhr", f.apply(pager));
		pxy.print(box.get("trdhr").toString());
		return box.get();
	}
	public int countTRDHR() {
		Function<PageProxy, String> s = p -> trdhrMapper.countTRDHR(p);
		return pxy.integer(s.apply(pager));
	}

}

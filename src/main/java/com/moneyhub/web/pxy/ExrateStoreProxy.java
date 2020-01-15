package com.moneyhub.web.pxy;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.moneyhub.web.exr.Exrate;

@Lazy
@Component("exPxy")
public class ExrateStoreProxy {
	@Autowired Inventory<Exrate> inventory;
	@Autowired Exrate exrate;
	public String[] bdateStore() {
		String[] date = {"2019-12-31", "2019-12-30","2019-12-29", "2019-12-28", "2019-12-27", "2019-12-26", "2019-12-25",
						"2019-12-24", "2019-12-23","2019-12-22", "2019-12-21", "2019-12-20", "2019-12-19"};
		return date;
	}
	
	public double[] exrateStore() {
		double[] exrate = { 1157.80, 1160.90, 1161.20, 1163.70, 1161.70, 1162.60, 1164.50, 1165.30, 1166.70, 1172.90, 1171.70, 1188.60, 1193.30 };
		return exrate;
	}
}

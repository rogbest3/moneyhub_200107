package com.moneyhub.web.crudtable;

import java.util.HashMap;
import java.util.function.Consumer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CRUDTableService {
	@Autowired CRUDCustomer customer;
	@Autowired CRUDFeeDB feeDB;
	@Autowired CRUDAdmin admin;
	
	@Autowired CRUDTableMapper crudTableMapper;
	
//	CRUDCustomer
	public void createCustomer(HashMap<String, String> map) {
		Consumer<HashMap<String, String>> c = p -> crudTableMapper.createCustomer(p);
		c.accept(map);
	}	
	public void truncateCustomer(HashMap<String, String> map) {
		Consumer<HashMap<String, String>> c = p -> crudTableMapper.truncateCustomer(p);
		c.accept(map);
	}	
	public void dropCustomer(HashMap<String, String> map) {
		Consumer<HashMap<String, String>> c = p -> crudTableMapper.dropCustomer(p);
		c.accept(map);
	}
	
//	CRUDFeeDB
	public void createFeeDB(HashMap<String, String> map) {
		Consumer<HashMap<String, String>> c = p -> crudTableMapper.createFeeDB(p);
		c.accept(map);
	}	
	public void truncateFeeDB(HashMap<String, String> map) {
		Consumer<HashMap<String, String>> c = p -> crudTableMapper.truncateFeeDB(p);
		c.accept(map);
	}	
	public void dropFeeDB(HashMap<String, String> map) {
		Consumer<HashMap<String, String>> c = p -> crudTableMapper.dropFeeDB(p);
		c.accept(map);
	}
	
//	CRUDAdmin
	public void createAdmin(HashMap<String, String> map) {
		Consumer<HashMap<String, String>> c = p -> crudTableMapper.createAdmin(p);
		c.accept(map);
	}		
	public void dropAdmin(HashMap<String, String> map) {
		Consumer<HashMap<String, String>> c = p -> crudTableMapper.dropAdmin(p);
		c.accept(map);
	}
	public void insertAdmin(HashMap<String, String> map) {
		Consumer<HashMap<String, String>> c = p -> crudTableMapper.insertAdmin(p);
		c.accept(map);
	}
	
	
}

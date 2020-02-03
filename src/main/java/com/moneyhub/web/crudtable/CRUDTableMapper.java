package com.moneyhub.web.crudtable;

import java.util.HashMap;

import org.springframework.stereotype.Repository;

@Repository
public interface CRUDTableMapper {
	//CUSTOMER
	public void createCustomer(HashMap<String, String> map);
	public void truncateCustomer(HashMap<String, String> map);
	public void dropCustomer(HashMap<String, String> map);
	
	//FEEDB
	public void createFeeDB(HashMap<String, String> map);
	public void truncateFeeDB(HashMap<String, String> map);
	public void dropFeeDB(HashMap<String, String> map);
	
	//Admin
	public void createAdmin(HashMap<String, String> map);
	public void dropAdmin(HashMap<String, String> map);
	public void insertAdmin(HashMap<String, String> map);

}

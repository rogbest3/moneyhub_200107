package com.moneyhub.web.remit.mappers;

import java.util.HashMap;

import org.springframework.stereotype.Repository;

import com.moneyhub.web.remit.domains.TRD;

@Repository
public interface RemitMapper {

	public void insertFee(HashMap<String, Object> deal);
	public void insertRCPT(HashMap<String, Object> deal);
	public void insertTRDHR(HashMap<String, Object> deal);
	public void insertTRD(TRD trd);
}

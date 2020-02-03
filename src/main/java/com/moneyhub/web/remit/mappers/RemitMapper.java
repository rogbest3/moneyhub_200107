package com.moneyhub.web.remit.mappers;

import java.util.HashMap;

import org.springframework.stereotype.Repository;

import com.moneyhub.web.remit.domains.RCPT;
import com.moneyhub.web.remit.domains.TRD;
import com.moneyhub.web.remit.domains.TRDHR;

@Repository
public interface RemitMapper {

	public void insertRCPT(RCPT rcpt);
	public void insertTRDHR(TRDHR trdhr);
	public void insertTRD(TRD trd);
	
	public void insertFee(HashMap<String, Object> deal);
}

package com.moneyhub.web.exchange.mappers;

import java.util.ArrayList;

import org.springframework.stereotype.Repository;

import com.moneyhub.web.cus.domains.Account;
import com.moneyhub.web.exchange.domains.Exchange;
import com.moneyhub.web.exr.Exrate;

@Repository
public interface ExchangeMapper {

	public void insertEx(Exchange ex);
	public ArrayList<Exrate> exTrend(String cntcd);
	public void balanceChg(Account acc);
}
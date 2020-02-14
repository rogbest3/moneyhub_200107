package com.moneyhub.web.cus.services;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.function.Consumer;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.moneyhub.web.cus.domains.Account;
import com.moneyhub.web.cus.domains.AccountHistory;
import com.moneyhub.web.cus.domains.Customer;
import com.moneyhub.web.cus.mappers.AccountMapper;
import com.moneyhub.web.pxy.Box;

@Service
public class AccountService {
	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	@Autowired Account acc;
	@Autowired AccountHistory accHistory;
	@Autowired AccountMapper accMapper;
	@Autowired Box<Object> box;
	@Autowired Customer cus;
	
	@Transactional
	public void createAcc(Customer param){
		Date date = new Date();
		System.out.println("::::param"+param);
		String result = Integer.toString((int)(Math.random() * 100) + 1) 
				+ param.getBirth().replace("-", "").substring(2) + param.getZip(); //계좌번호 생성
		System.out.println("result는?????" + result);
		int exist = accMapper.existAcc(result);
		int balance = 100000000; 
		int deposit = 100000000; 
		String comment = "신규 가입 지급";
		if(exist != 0) {
			System.out.println("exist는????" + exist);
		}else {
			acc.setCemail(param.getCemail());
			acc.setAcctNo(result);
			/* acc.setBsdate(sdf.format(date)); */
			/* acc.setBalance(balance); */
			System.out.println("acc는????" + acc.toString());
			accMapper.createAcc(acc);
			//EJ 계좌내역 테이블 인서트
			accHistory.setCemail(param.getCemail());
			/* accHistory.setBsdate(sdf.format(date)); */
			accHistory.setAstatcd("1"); // 상태코드 1은 입금 2는 출금
			accHistory.setBalance(balance);
			accHistory.setDeposit(deposit);
			accHistory.setAcctNo(result); 
			accHistory.setComment(comment);
			accMapper.createAccHistory(accHistory);
		}
	}
	
	public void withDrawal(HashMap<String, Object> param) {
		//EJ 수정 acc -> 히스토리로 연결
		
		System.out.println("Exchange.service balanceChg 들어옴 여기서 exchange는? - " + param);
		accHistory.setCemail(param.get("cemail").toString());
		//String stwithdrawal = exch.getExchKrw();
		//int withdrawal = Integer.parseInt(stwithdrawal.replaceAll(",", ""));
		//accHistory.setWithdrawal(withdrawal);
		String stexchange = param.get("acc").toString();
		JSONObject json = new JSONObject(stexchange);
		int intbalance = json.getInt("balance");
		//int balance = intbalance - withdrawal;
		//accHistory.setBalance(balance);
		if(accHistory.getBalance() > 0) {
			Consumer<AccountHistory> c = o -> accMapper.withDrawal(accHistory);
			c.accept(accHistory);
		}else {
			System.out.println("잔액 부족으로 인해 실패!");
		}
	}
	/*
	 * public void balanceChg(HashMap<String, Object> exchange) { //EJ 수정 acc ->
	 * 히스토리로 연결
	 * 
	 * System.out.println("Exchange.service balanceChg 들어옴 여기서 exchange는? - " +
	 * exchange); accHistory.setCemail(exchange.get("cemail").toString()); String
	 * stwithdrawal = exch.getExchKrw(); int withdrawal =
	 * Integer.parseInt(stwithdrawal.replaceAll(",", ""));
	 * accHistory.setWithdrawal(withdrawal); String stexchange =
	 * exchange.get("acc").toString(); JSONObject json = new JSONObject(stexchange);
	 * int intbalance = json.getInt("balance"); int balance = intbalance -
	 * withdrawal; accHistory.setBalance(balance); if(accHistory.getBalance() > 0) {
	 * Consumer<AccountHistory> c = o -> exMapper.balanceChg(accHistory);
	 * c.accept(accHistory); }else { System.out.println("잔액 부족으로 인해 실패!"); } }
	 */

}

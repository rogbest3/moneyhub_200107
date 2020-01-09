package com.moneyhub.web.cus;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Repository;


@Repository
public interface CustomerMapper {
	
	public void join(Customer param);
	public Customer login(Customer param);
	public int existId(String id);
	public void pwdSha(Customer param);
	//public boolean send(String subject, String text, String from, String to, String filePath);
	//public int GetKey(String cemail, String custKey); //고객 인증 키 생성 메서드
	//public int alterCustKey(String cemail, String key); // 고객 인증키 Y로 바꿔주는 메서드
	public Customer pwdCheck(Customer param);
	public void withdrawal(Customer param, HttpSession session);
}

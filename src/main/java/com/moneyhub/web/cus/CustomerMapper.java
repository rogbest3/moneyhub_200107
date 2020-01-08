package com.moneyhub.web.cus;

import org.springframework.stereotype.Repository;


@Repository
public interface CustomerMapper {
	
	public void join(Customer param);
	public Customer login(Customer param);
	public int existId(String id);
	public void pwdSha(Customer param);
	public boolean send(String subject, String text, String from, String to, String filePath);
	public void custMail(Customer param);
	public void GetKey(String cemail, String cust_key); //고객 인증 키 생성 메서드
	public void alter_custKey(String cemail, String key); // 고객 인증키 Y로 바꿔주는 메서드
	public String key_alterConfirm();
	public void alter_custKey_service(String cemail, String key);
	
}

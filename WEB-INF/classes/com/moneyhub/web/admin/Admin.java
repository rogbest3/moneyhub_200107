package com.moneyhub.web.admin;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Lazy
@Data
@Component
@AllArgsConstructor
@NoArgsConstructor
public class Admin {
	
	private String aid, amail, pwd;
	
	private String cno, cemail, cpwd, cname, zip, addr, daddr, birth, sdate, cstcd;
	
	private String balance, age;
	//sdate 가입일  wdate 탈퇴일  cstcd, 고객상태코드
	

}

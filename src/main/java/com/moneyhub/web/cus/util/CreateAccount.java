package com.moneyhub.web.cus.util;

import java.text.SimpleDateFormat;
import java.util.Date;

public class CreateAccount {
	
	public static void main(String[] args) {
		//계좌번호 길이 (난수(2)+날짜(6)+회원번호(4))
		String accNum = "";
		
		//난수
		int ran = (int)(Math.random()*100); 
		if(ran < 10) {
			ran = ran*10+1;
		}
		
		//날짜
		SimpleDateFormat dateFormat = new SimpleDateFormat("YY-MM-dd");
		Date date = new Date();
		String nowDate = dateFormat.format(date);
		System.out.println("nowDate1: "+nowDate);
		nowDate = nowDate.substring(0, 5);
		nowDate = nowDate.toString().replace("-", "");
		nowDate = nowDate.toString().replace(" ", "");
		System.out.println("nowDate2: "+nowDate);
		
		//회원번호
		for(int i=1000; i<10000; i++) {
			i++;
		}
		System.out.println("계좌번호"+accNum);
	}
}



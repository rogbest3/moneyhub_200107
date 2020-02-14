package com.moneyhub.web.test;

import java.io.IOException;

import org.json.JSONArray;
import org.json.JSONObject;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;

public class Test {
	
	public static void main(String[] args) {
		final String USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36";
		
		String exrateUrl = "https://api.manana.kr/exchange/rate/KRW/KRW,USD,JPY,CNY,SGD,AUD,GBP,NPR,EUR.json";
		JSONArray jsonArr = null;
		try {
			Connection.Response homePage = Jsoup.connect(exrateUrl)
											.method(Connection.Method.GET)
											.userAgent(USER_AGENT)
											.ignoreContentType(true)
											.execute();
			jsonArr = new JSONArray(homePage.parse().select("body").text());
			System.out.println(jsonArr.length());
			System.out.println(jsonArr);
			
			for( int i = 0; i< jsonArr.length(); i++ ) {
				String a = jsonArr.getJSONObject(i).get("date").toString().substring(0, 10);
				double b = Math.round(Float.parseFloat(jsonArr.getJSONObject(i).get("rate").toString()) * 100) /100.0d;
				String c = jsonArr.getJSONObject(i).get("name").toString().substring(0, 3);
				System.out.println("date : " + a + ", rate : " + b + ", name : " + c);
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
/*		String a = "129.213123441";
			
		System.out.println(Math.round(Float.parseFloat(a) * 100) /100.0d);*/
	}

}

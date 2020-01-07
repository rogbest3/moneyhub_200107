package com.moneyhub.web.enums;

public enum Path {
	FAQ_URL, USER_AGENT
	;
	@Override
	public String toString() {
		String result = "";
		switch (this) {
		case FAQ_URL :
			result = "https://m.kakaobank.com/FaqTag;tag=%EC%99%B8%ED%99%98";
			break;
			
		case USER_AGENT :
			result = "Mozilla/5.0 (Windows NT 10.0; WOW64) "
					+ "AppleWebKit/537.36 (KHTML, like Gecko) "
					+ "Chrome/51.0.2704.103 Safari/537.36";
			break;
		}
		return result;
	}
}

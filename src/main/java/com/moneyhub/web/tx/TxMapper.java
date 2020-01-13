package com.moneyhub.web.tx;

import org.apache.ibatis.annotations.Insert;
import org.springframework.stereotype.Repository;

import com.moneyhub.web.faq.FAQ;

@Repository
public interface TxMapper {
	
	@Insert("INSERT INTO FAQ ( TITLE, CONTENT)\r\n" + 
			"VALUES ( #{title}, #{content})")
	public void insertFAQ(FAQ param);
}

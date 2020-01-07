package com.moneyhub.web.faq;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.moneyhub.web.pxy.PageProxy;

@Repository
public interface FAQMapper {
	void createFAQ(HashMap<String, String> map);
	void deleteFAQ(HashMap<String, String> map);
	ArrayList<FAQ> selectAll(PageProxy pager);
	String countFAQ();
}

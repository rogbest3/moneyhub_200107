package com.moneyhub.web.remit.serviceimpls;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.moneyhub.web.remit.domains.Fee;
import com.moneyhub.web.remit.domains.RCPT;
import com.moneyhub.web.remit.domains.TRD;
import com.moneyhub.web.remit.domains.TRDHR;
import com.moneyhub.web.remit.mappers.RemitMapper;
import com.moneyhub.web.remit.services.RemitService;
import com.moneyhub.web.remit.util.CharUtil;

@Service
public class RemitServiceImpl implements RemitService{
	Date date = new Date();
	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	@Resource
	private CharUtil charUtil;
	@Autowired TRDHR trdhr;
	@Autowired TRD trd;
	@Autowired RCPT rcpt;
	@Autowired Fee fee;
	@Autowired
	private RemitMapper remitMapper;
	
	@Override
	@Transactional
	public void insertRemit(HashMap<String, Object> deal) {
		//bsdate , mtcn 생성,고객정보 받아오기, 나눠 담기
		//거래 mtcn,acctNo
		trd.setBsdate(sdf.format(date));
		trd.setMtcn("123");
		trd.setCno(deal.get("cno").toString());
		trd.setTrdStatCd(0);  //0=입금대기 -> 공통코드 관리
		trd.setChngCausCd(0);
		trd.setTrdAmnt(deal.get("amount").toString());
		trd.setCntcd(deal.get("cntcd").toString());
		trd.setExrate((double) deal.get("exrate"));
		trd.setCrtmem("LEJ");
		trd.setCrtdt(sdf.format(date));
		String aa = charUtil.excuteGenerate();
		String bb = charUtil.toString();
		int cc = charUtil.getCertCharLength();
		System.out.println("aa"+aa+"bb"+bb+"cc"+cc);
		/*
		 * remitMapper.insertFee(deal); remitMapper.insertRCPT(deal);
		 * remitMapper.insertTRDHR(deal);
		 */
		remitMapper.insertTRD(trd);
	}

}

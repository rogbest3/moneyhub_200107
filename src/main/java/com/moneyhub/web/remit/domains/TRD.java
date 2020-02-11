package com.moneyhub.web.remit.domains;

import java.math.BigDecimal;

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
public class TRD {

	private String bsdate,mtcn,cno,trdUsd,trdKrw,cntcd,crtmem,crtdt,upmem,updt;
	private int trdStatCd,chngCausCd,acctNo;
	private BigDecimal exrate;
}

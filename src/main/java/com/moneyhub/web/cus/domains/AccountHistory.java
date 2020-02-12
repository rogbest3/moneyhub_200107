package com.moneyhub.web.cus.domains;

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
public class AccountHistory {  // 계좌 내역 테이블
	
	private String cemail, bsdate, acctNo, astatcd,atypecd,comment, crtmem, crtdt, upmem, updt;
	private int balance, deposit, withdrawal,seq;
}

package com.moneyhub.web.pxy;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.moneyhub.web.faq.FAQMapper;
import com.moneyhub.web.remit.mappers.TRDHRMapper;

import lombok.Data;

@Lazy
@Data
@Component("pager")
public class PageProxy extends Proxy {
	private int rowCount, startRow, endRow,
				pageCount, nowPage, pageSize, startPage, endPage,
				blockCount, nowBlock, blockSize, prevBlock, nextBlock;
	private boolean existPrev, existNext;

	private String keyword,cno;
	
	@Autowired FAQMapper faqMapper;
	@Autowired TRDHRMapper trdhrMapper;
	
	public void paging() {
		pageCount = ( rowCount % pageSize != 0 ) 
				? rowCount / pageSize + 1 
				: rowCount / pageSize;
		blockCount = ( pageCount % blockSize != 0 ) 
					? pageCount / blockSize + 1 
					: pageCount / blockSize;
			
		// nowPage  - 0, 1,  2,  3
		// startRow - 0, 5, 10
		// endRow   - 4, 9, 14, 16
		startRow = nowPage * pageSize;
		endRow = ( nowPage != pageCount - 1 && pageCount - 1 >= 0 ) 
					? startRow + pageSize - 1 
					: rowCount - 1;
		
		// nowBlock  - 0, 1,  2,  3
		// startPage - 0, 5, 10
		// endPage   - 4, 9, 14, 16
		nowBlock = nowPage / blockSize;
		startPage = nowBlock * blockSize;
		endPage = ( nowBlock != blockCount - 1 && blockCount - 1 >= 0  ) 
					? startPage + blockSize - 1
					: pageCount - 1;
		
		prevBlock = startPage - blockSize;
		nextBlock = startPage + blockSize;
		
		existPrev = nowBlock != 0;
		existNext = (nowBlock != (blockCount - 1)) && (blockCount - 1 >= 0) ;
		
	}
}

var retention_amount = retention_amount || {}
retention_amount =(()=>{
	let _, js
	let init=()=>{
		_ = $.ctx()
		js = $.js()
	}
	
	let onCreate =()=>{
		init()
		setContentView()
	}
	
	let setContentView =()=>{
		let data = [ { title : "보유금액", money: 10000000, cntcd : 'KRW' },
					{ title : "한화", money: 0, cntcd : 'KRW' },
					{ title : "미국 달러", money: 0, cntcd : 'USD' },
					{ title : "호주 달러", money: 0, cntcd : 'AUD' },
					{ title : "유럽 유로", money: 0, cntcd : 'EUR' },
					{ title : "중국 위안", money: 0, cntcd : 'CNY' },
					{ title : "일본 엔", money: 0, cntcd : 'JPY' }]
		
		$.each(data, (i,j)=>{
			$(`<li><p>${j.title}</p><p style="margin-right : 10px; width:100px; text-align: right">${j.money}</p><p class="fs-block">${j.cntcd}</p></li>`)
			.appendTo('#amount ol')
		})
		
	}
	return { onCreate }
})()
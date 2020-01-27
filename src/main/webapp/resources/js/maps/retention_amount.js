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
		let data = [ { title : "보유금액", cntcd : 'KRW' },
					{ title : "한화", cntcd : 'KRW' },
					{ title : "미국 달러", cntcd : 'USD' },
					{ title : "호주 달러", cntcd : 'AUD' },
					{ title : "유럽 유로", cntcd : 'EUR' },
					{ title : "중국 위안", cntcd : 'CNY' },
					{ title : "일본 엔", cntcd : 'JPY' }]
		
		$.each(data, (i,j)=>{
			$(`<li><p>${j.title}</p><p></p><p>${j.cntcd}</p></li>`)
			.appendTo('#money ul')
		})
		
	}
	return { onCreate }
})()
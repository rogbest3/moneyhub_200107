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
		let data = [ { title : "총 보유금액", money: 100000000, cntcd : 'KRW' },
//					{ title : "한화", money: 0, cntcd : 'KRW' },
					{ title : "미국 달러", money: 0, cntcd : 'USD' },
					{ title : "호주 달러", money: 0, cntcd : 'AUD' },
					{ title : "유럽 유로", money: 0, cntcd : 'EUR' },
					{ title : "중국 위안", money: 0, cntcd : 'CNY' },
					{ title : "일본 엔", money: 0, cntcd : 'JPY' }]
		
		$.each(data, (i,j)=>{
			$(`<li><p style="font-size : 18px">${j.title}</p>
					<p style="color : #2dccd3; font-size : 18px; margin-right : 10px; min-width:120px; width:35%; text-align: right; ">${numberFormat(j.money)}</p>
					<p class="fs-block" style="font-size : 18px">${j.cntcd}</p>
				</li>`)
			.css({
				'font-size' : '18px'
			})
			.appendTo('#amount ol')
		})
	}
	
	let numberFormat =x=>{
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
	}
	return { onCreate }
})()
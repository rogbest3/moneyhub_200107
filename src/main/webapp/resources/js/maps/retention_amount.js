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
		let data = [ { id: 'total_money', title : "총 보유금액", money: 100000000, cntcd : 'KRW' },
					{ id: 'exchange_krw', title : "대한민국 한화", money: 100000000, cntcd : 'KRW' },
					{ id: 'exchange_usd', title : "미국 달러", money: 0, cntcd : 'USD' },
					{ id: 'exchange_aud', title : "호주 달러", money: 0, cntcd : 'AUD' },
					{ id: 'exchange_eur', title : "유럽 유로", money: 0, cntcd : 'EUR' },
					{ id: 'exchange_cny', title : "중국 위안", money: 0, cntcd : 'CNY' },
					{ id: 'exchange_jpy', title : "일본 엔", money: 0, cntcd : 'JPY' }]
		
		$.each(data, (i,j)=>{
			$(`<li><p style="font-size : 18px width:120px;">${j.title}</p>
					<p id="${j.id}" style="color : #2dccd3; font-size : 18px; margin-right : 10px; min-width:120px; width:35%; text-align: right; ">${numberFormat(j.money)}</p>
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
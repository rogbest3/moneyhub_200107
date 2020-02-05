var exrate = exrate || {}
exrate =(()=>{
	let _, js, deal, exrateSess, exrate, receive_cntcd, send_cntcd
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		deal = $.deal()
		exrateSess = $.exrateSess()
		receive_cntcd = $('.form-calculator .amount-row .receive h3').text()
		send_cntcd = $('.form-calculator .amount-row .send h3').text()
	}
	
	let onCreate =()=>{
		init()
		rate_calc()
	}
	let rate_calc =()=>{
		if( receive_cntcd !== 'KRW'){	// 외화로 환전
			exrate_select(receive_cntcd)
		}else{							// 한화로 환전
			exrate_select(send_cntcd)
		}
	
		receive_value_calc()
		$('.form-calculator .amount-row input.send-amount').keyup(()=>{
			receive_value_calc()
		})
		sessionStorage.setItem('deal',JSON.stringify(deal))
	}
	
	let receive_value_calc =()=>{
		let receive_value = common.comma_remove($('.form-calculator .amount-row input.send-amount').val()) 
		if( receive_cntcd === 'KRW'){
			receive_value = receive_value * exrate //* 0.985
		}
		else{
			receive_value = receive_value / exrate //* 0.985
		}
		
		$('.form-calculator .amount-row input.receive-amount').val(common.comma_create(receive_value.toFixed(2)))

		deal.trdusd = $('.form-calculator .amount-row input.send-amount').val()
		sessionStorage.setItem('deal',JSON.stringify(deal))
	}
	
	let exrate_select =x=>{
		switch (x) {
		case 'USD':
			exrate = exrateSess.usd
			break;
		case 'EUR':
			exrate = exrateSess.eur
			break;
		case 'CNY':
			exrate = exrateSess.cny
			break;
		case 'JPY':
			exrate = exrateSess.jpy
			break;
		case 'AUD':
			exrate = exrateSess.aud
			break;
		}
		
	}
	return { onCreate }
})()
var exrate = exrate || {}
exrate =(()=>{
	let _, js
	let init =()=>{
		_ = $.ctx()
		js = $.js()
	}
	
	let onCreate =()=>{
		init()
		rate_calc()
	}
	let rate_calc =()=>{
//		alert($('.form-calculator .amount-row .receive h3').text())
		let receive_cntcd = $('.form-calculator .amount-row .receive h3').text(),
			send_cntcd = $('.form-calculator .amount-row .send h3').text(),
			cntcd,
			exrate_arr = []
		
		if( receive_cntcd === 'KRW'){
			cntcd = send_cntcd
		}else{
			cntcd = receive_cntcd
		}
		
		$.getJSON( '/web/exrate/search/cntcd/' + cntcd, d=>{	
			$.each(d.exlist.reverse(), (i, j)=>{
				exrate_arr.push(parseFloat(j.exrate))
			})

			receive_value_calc()
			$('.form-calculator .amount-row input.send-amount').keyup(()=>{
				receive_value_calc()
			})
		})
		
		//	수수료 1.5%
		let receive_value_calc =()=>{
			if( receive_cntcd === 'KRW'){
//				alert('receive_cntcd가 KRW 일 때 - ' + exrate_arr[exrate_arr.length -1])
				let receive_value = $('.form-calculator .amount-row input.send-amount').val().replace(/,/gi, '') 
								* exrate_arr[exrate_arr.length -1]
			
				$('.form-calculator .amount-row input.receive-amount').val(numberFormat(receive_value.toFixed(0)))
			}
			else{
//				alert( $('.form-calculator .amount-row input.send-amount').val().replace(/,/gi, '') +' / '+exrate_arr[exrate_arr.length -1])
				let receive_value = $('.form-calculator .amount-row input.send-amount').val().replace(/,/gi, '') 
								/ exrate_arr[exrate_arr.length -1]
			
				$('.form-calculator .amount-row input.receive-amount').val(numberFormat(receive_value.toFixed(2)))
			}
			// * 0.985
		}
		
		let numberFormat =x=>{
			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
		}
	}
	return { onCreate }
})()
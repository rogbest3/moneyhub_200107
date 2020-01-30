var exrate = exrate || {}
exrate =(()=>{
	let _, js
	let init =x=>{
		_ = $.ctx()
		js = $.js()
		flag = x
	}
	
	let onCreate =x=>{
		init(x)
		alert('exrate_flag1 : '+flag)
		rate_calc()
	}
	let rate_calc =()=>{
//		alert($('.form-calculator .amount-row .receive h3').text())
		let cntcd = $('.form-calculator .amount-row .receive h3').text()
		let exrate_arr = []
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
			alert('exrate_flag2 : '+flag)
			if(flag === 'exchange'){
				
				let receive_value = $('.form-calculator .amount-row input.send-amount').val().replace(/,/gi, '') 
								/ exrate_arr[exrate_arr.length -1]
			
				$('.form-calculator .amount-row input.receive-amount').val(numberFormat(receive_value.toFixed(2)))
			}
			else{
				alert( $('.form-calculator .amount-row input.send-amount').val().replace(/,/gi, '') +' / '+exrate_arr[exrate_arr.length -1])
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
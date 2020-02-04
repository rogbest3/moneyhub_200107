"use strict"
var common = common || {}
common = (function(){
	
	return {
		comma_create : function(x){
			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
		},
		comma_remove : function(x){
			return x.replace(/,/gi, '')
		},
		popup_close : function(x){
			
			$('#popup-' + x + ' .moin-close')
			.click(e=>{
				e.preventDefault()
				$('#popup-' + x)
				.hide()
			})
		},
		clock_format : function(){
			let date = new Date();
			let yyyy = date.getFullYear()
			let mm = (date.getMonth() + 1).toString()
			let dd = date.getDate().toString()
			
			mm = mm[1] ? mm : "0" + mm[0]
			dd = dd[1] ? dd : "0" + dd[0]

			return `${yyyy}-${mm}-${dd}`
		},
		remit_send : function(){
			let send = $('.form-calculator .amount-row input.send-amount')
			let send_value = common.comma_create(common.comma_remove(send.val()))	
			send.val(send_value)
		},
		remit_send_focusout : function(){
			common.remit_send()
			$('.form-calculator .amount-row input.send-amount')
			.focusout(()=>{
				common.remit_send()
			})
		},
		receive_value_calc : function(x){
			
			let receive_value = common.comma_remove($('.form-calculator .amount-row input.send-amount').val()) 
				alert('>>>>'+common.comma_remove($('.form-calculator .amount-row input.send-amount').val())*x)
			
				receive_value = receive_value * x //* 0.985
			$('.form-calculator .amount-row input.receive-amount').val(common.comma_create(receive_value.toFixed(0)))

			alert('>>>>'+$('.form-calculator .amount-row input.send-amount').val())
		},
		total_amount_calc : function(){
			exrate = $.exrate_sess()
			alert('exrate : ' + exrate.usd )
			let total = parseFloat(common.comma_remove($('#exchange_KRW').text()))
						+ parseFloat(common.comma_remove($('#exchange_USD').text())) * exrate.usd
						+ parseFloat(common.comma_remove($('#exchange_AUD').text())) * exrate.aud
						+ parseFloat(common.comma_remove($('#exchange_EUR').text())) * exrate.eur
						+ parseFloat(common.comma_remove($('#exchange_CNY').text())) * exrate.cny
						+ parseFloat(common.comma_remove($('#exchange_JPY').text())) * exrate.jpy
						
			$('#total_money').text(common.comma_create(total.toFixed(0)))
		},
		amount_init : function(){
			$('#total_money').text(common.comma_create(100000000))
			$('#exchange_KRW').text(common.comma_create(100000000))
			$('#exchange_USD').text(0)
			$('#exchange_AUD').text(0)
			$('#exchange_EUR').text(0)
			$('#exchange_JPY').text(0)
		}
	}
}())
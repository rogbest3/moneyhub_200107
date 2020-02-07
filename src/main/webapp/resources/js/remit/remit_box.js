"use strict"
var remit_box = remit_box || {}
remit_box =(()=>{
	let _, js, line_graph_js, exrate_js, flag, cntcd, deal, exChart_js
	let init =x=>{
		_ = $.ctx()
		js = $.js()
		deal = $.deal()
		line_graph_js = js + '/exchart/line_graph.js'
		exrate_js = js + '/exchart/exrate.js'
		exChart_js = js + '/mypage/exChart.js'
		flag = x.flag
		cntcd = x.cntcd
	}
	
	let onCreate =x=>{
		init(x)
		
		common.remit_send_focusout()

		popup()
		
		if(flag === 'exchange'){
			$.getScript(exrate_js)
			.done(()=>{
				exrate.onCreate()
			})
		}
	}
	
	let popup =()=>{
		if(flag === 'exchange'){	// 모의 환전 시
			let send_data = [ { img : 'kr', cntcd : 'KRW', curr : '대한민국 한화', flag : ''}, 
							{ img : 'us', cntcd : 'USD', curr : '미국 달러', flag : '' },
							{ img : 'cn', cntcd : 'CNY', curr : '중국 위안', flag : '' },
							{ img : 'de', cntcd : 'EUR', curr : '독일 유로', flag : '' },			
							{ img : 'au', cntcd : 'AUD', curr : '호주 달러', flag : '' },
							{ img : 'jp', cntcd : 'JPY', curr : '일본 엔', flag : '' }]
			
			if( cntcd === 'KRW' ){
//				alert('cntcd : ' + cntcd) cntcd = 국가코드
				$('.form-calculator .amount-row .send')	// send cntcd 클릭 시
				.click(e=>{
					e.preventDefault()
					$('#popup-exchange').hide()
					$('#popup-root')
					.show()
					$('#popup_box input').val('')
					$('#popup_box ul').empty()
					send_cntcd_filter(send_data)
				})
			}
			
			$('#popup-root .moin-close')
			.click(e=>{
				e.preventDefault()
				$('#popup-root')
				.hide()
				$('#popup-exchange').show()
			})
			
		}else{	// 모의 환전 아닐 때
			let receive_data = [ { img : 'jp', cntcd : 'JPY', curr : '일본 엔', flag : '' },
					{ img : 'cn', cntcd : 'CNY', curr : '중국 위안', flag : '' },
					{ img : 'us', cntcd : 'USD', curr : '미국 달러', flag : '' },
					{ img : 'sg', cntcd : 'SGD', curr : '싱가포르 달러', flag : '' },
					{ img : 'au', cntcd : 'AUD', curr : '호주 달러', flag : '' },
					{ img : 'gb', cntcd : 'GBP', curr : '영국 파운드', flag : '' },
					{ img : 'vn', cntcd : 'VND', curr : '베트남 동', flag : '' },
					{ img : 'be', cntcd : 'EUR', curr : '벨기에 유로', flag : '' },
					{ img : 'fr', cntcd : 'EUR', curr : '프랑스 유로', flag : '' },
					{ img : 'de', cntcd : 'EUR', curr : '독일 유로', flag : '' },
					{ img : 'it', cntcd : 'EUR', curr : '이탈리아 유로', flag : '' },
					{ img : 'nl', cntcd : 'EUR', curr : '네덜란드 유로', flag : '' },
					{ img : 'pt', cntcd : 'EUR', curr : '포르투갈 유로', flag : '' },
					{ img : 'es', cntcd : 'EUR', curr : '스페인 유로', flag : '' }]
			
			$('.form-calculator .amount-row .receive')	// receive cntcd 클릭 시
			.click(e=>{
				e.preventDefault()
				$('#popup-root')
				.show()
				
				$('#popup_box input').val('')
				$('#popup_box ul').empty()
				cntcd_display(receive_data)
			})

			$('#popup_box input').keyup(()=>{
				search_filter(receive_data)			
			})
			
			common.popup_close('root')
		}
	}
	
	let send_cntcd_filter =x=>{
		let filtered_data = []
		for(let i=0; i< x.length; i++ ){
			if(x[i].cntcd !== cntcd ){
				filtered_data.push(x[i])
			}
		}
		cntcd_display(filtered_data)
	}
	
	let search_filter =x=>{
		let filtered_data = []
		for(let i=0; i< x.length; i++ ){
			if(x[i].curr.indexOf($('#popup_box input').val()) > -1 ){
				filtered_data.push(x[i])
			}else{
				$('#popup_box ul').empty()
			}
		}
		cntcd_display(filtered_data)
	}
	
	let cntcd_display =x=>{
		$.each(x, (i, j)=>{
			j.flag = flag
			$(`<li><img src="https://img.themoin.com/public/img/circle-flag-${j.img}.svg"><a><p>${j.cntcd}</p><p>${j.curr}</p></a></li>`)
			.appendTo('#popup_box ul')
			.click(()=>{
				$('#popup-root')
				.hide()
				$('#popup_box input').val('')

				if( j.flag === 'mypage'){

					$('.form-calculator .amount-row .receive img').attr("src",`https://img.themoin.com/public/img/circle-flag-${j.img}.svg`)
					$('.form-calculator .amount-row .receive p').text(`${j.curr.substring(0, j.curr.indexOf(' '))}`)
					$('.form-calculator .amount-row .receive h3').text(`${j.cntcd}`)
					
					/*$('#chart')
					.html(`<canvas id="canvas" style="width:70%; height: 150px; max-height: 220px"></canvas>`)
					$.getScript(line_graph_js)*/

					deal.cntp =$('.form-calculator .amount-row .receive p').text() //송금 국가명, 국가코드
					deal.cntcd = $('.form-calculator .amount-row .receive h3').text()
					sessionStorage.setItem('deal',JSON.stringify(deal))
					alert("레미트박스 국가명 >>>"+deal.cntp+"국가코드 >>>"+deal.cntcd)
					
				}
				else if(( j.flag === 'exchange')){
					$('.form-calculator .amount-row .send p').text(`${j.curr.substring(0, j.curr.indexOf(' '))}`)
					$('.form-calculator .amount-row .send h3').text(`${j.cntcd}`)
				
					$('#popup-exchange').show()
					exrate.onCreate()

				}
				else if( j.flag === 'exchange2'){
					$('.form-calculator .amount-row .receive p').text(`${j.curr.substring(0, j.curr.indexOf(' '))}`)
					$('.form-calculator .amount-row .receive h3').text(`${j.cntcd}`)
					sessionStorage.setItem('exch',JSON.stringify(exch))
					alert("exch.cntp - "+exch.cntp+"   exch.cntcd - "+exch.cntcd)
					
					let cntcd = $('.form-calculator .amount-row .receive h3').text()
					$.getJSON(_+'/exchange/extrend/cntcd/' + cntcd, d=>{
						if(d.msg === 'UP'){
							$('#exchange_check').text('최근 약 2주간 해당 환율은 상승세입니다.')
							$('#exchange_check').css('color', 'blue')
							$('#exchange_check').css('text-align', 'center')
							$('#exchange_check').css('font-weight', 'bold')
						}else{
							$('#exchange_check').text('최근 약 2주간 해당 환율은 하락세입니다.')
							$('#exchange_check').css('color', 'red')
							$('#exchange_check').css('text-align', 'center')
							$('#exchange_check').css('font-weight', 'bold')
						}
					})
					exch.cntp =$('.form-calculator .amount-row .receive p').text() //송금 국가명, 국가코드
					exch.cntcd = $('.form-calculator .amount-row .receive h3').text()
					sessionStorage.setItem('exch',JSON.stringify(exch))
					alert("exch.cntp - "+exch.cntp+"   exch.cntcd - "+exch.cntcd)
					$('#chart')
					.html(`<canvas id="canvas" style="width:70%; height: 150px; max-height: 220px"></canvas>`)
					$.getScript(exChart_js)
					
				}
				else{
					/*$('.form-calculator .amount-row .receive p').text(`${j.curr.substring(0, j.curr.indexOf(' '))}`)
					$('.form-calculator .amount-row .receive h3').text(`${j.cntcd}`)
					exrate.onCreate()*/
				}
			})
		})
	}
	return { onCreate }
})()
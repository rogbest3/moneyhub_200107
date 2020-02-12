var exchange = exchange || {}
exchange =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'

	let _, js, mypage_vue_js, exChart_js, remit_box_js, line_graph_js, 
			nav_vue_js, exch, cus, acc,accHis,function_vue_js

	let init =()=>{
		_ = $.ctx()
		js = $.js()
		exch = $.exch()
		cus = $.cusInfo()
		acc = $.acc()
		mypage_vue_js = js + '/vue/mypage_vue.js'
		exChart_js = js + '/mypage/exChart.js'
		remit_box_js = js + '/remit/remit_box.js'
		line_graph_js = js + '/exchart/line_graph.js'
		nav_vue_js = js + '/vue/nav_vue.js'
		function_vue_js = js + '/vue/function_vue.js'
	}
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(mypage_vue_js),
			$.getScript(remit_box_js),
			$.getScript(nav_vue_js),
			$.getScript(function_vue_js)
		)
		.done(()=>{
			setContentView()
			remit_box.onCreate({ flag : 'exchange2', cntcd : '' })
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
		
	}
	let setContentView =()=>{
		
		$('#root div.themoin-main')
		.html(function_vue.exchangeFunction())
		
		$('#popup-root')
		.html(function_vue.exch_cntcd_popup())
		.hide()
		
		$('#popup-exchange').empty()
		
		let cntcd = $('.form-calculator .amount-row .receive h3').text()
		let exch_arr = []
		//200212 hm 주석처리
		$.getJSON('/web/exrate/search/cntcd/' + cntcd, d=>{	
			$.each(d.exlist, (i, j)=>{
				exch_arr.push(parseFloat(j.exrate))
			})
			exch.exrate = exch_arr[0]
			sessionStorage.setItem('exch',JSON.stringify(exch))
			alert('exchange.js / 세션에 담긴 exch.exrate는? ' + exch.exrate)
			
			$('.form-calculator .amount-row input.send-amount').keyup(()=>{
//			alert('1번 exchange.js 59번 라인 ')
					common.receive_value_calc(exch.exrate)
//					alert('4번 exch.exrate는? ' + exch.exrate)
//					alert('7번 common.receive_value_calc(exch.exrate)' + common.receive_value_calc()) //exch.exrate는 undefined
			}) 
		})
				
		$(function(){
			$('#exchangebutton').one('click', function(){
				$('#chart2').fadeIn()

				$.getJSON(_+'/exchange/extrend/cntcd/' + cntcd, d=>{
					alert(alert('exchange -> d.msg는?' + d.msg))
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
				$.getScript(exChart_js)
				$(this).click(function(){
					if(confirm('환전하시겠습니까? 확인을 누르시면 바로 실행됩니다.')){

						exch.exchKrw = $('.form-calculator .amount-row input.send-amount').val() //환전할 원화 금액
						exch.exchCnt = $('.form-calculator .amount-row input.receive-amount').val() //환전된 외화 금액
						exch.cntcd = $('.form-calculator .amount-row .receive h3').text()
						exch.cemail = cus.cemail
						exch.exrate = exch.exrate
						sessionStorage.setItem('exch',JSON.stringify(exch))

						$('#auth_mgmt').each(function(){ //거래 인설트
							$.ajax({
								url : _+'/exchange/insert',
								type : 'POST',
								data: JSON.stringify(exch),
								dataType : 'json',
								contentType : 'application/json',
								success : d=>{
									if(d.msg === 'SUCCESS'){
										accHis = $.accHis()
										let cemail = cus.cemail
										let cno = cus.cno
										$.getJSON(_+'/account/getacchis/' + cemail + '/' + cno, t=>{
											if(d.msg === "SUCCESS"){
												accHis.balance = t.accHis.balance
												alert(accHis.balance)
												sessionStorage.setItem('accHis', JSON.stringify(accHis))
												//==========================================================HM
												/*acc.balance = t.acc.balance
												alert('exchange의 acc.balance는? '+acc.balance)
												sessionStorage.setItem('acc', JSON.stringify(acc))*/
												//==========================================================
											}else{
												alert('계좌 getJSON 실패')
											}
										})
										alert('머니허브 계좌로 이동합니다.')
										$.ajax({
											url : _ + '/account/withdrawal',
											type : 'POST',
											data : JSON.stringify({
												cemail : cus.cemail,
												exch : JSON.stringify(exch),
												acc : JSON.stringify(acc)
											}),
											dataType : 'json',
											contentType : 'application/json',
											success : d=>{
												if(d.msg === 'SUCCESS'){
													alert('회원 정보가 수정되었습니다.')
												}else if(d.msg === 'FAIL'){
													alert('잔액이 부족합니다. 잔액를 확인해주세요.')
												}
											},
											error : e=>{
												alert('cus_info_chg ajax 실패')  
											}
										})
										
										var tab_id = $(this).attr('data-tab')
										$(this).addClass('active')
										$("#"+tab_id).addClass('active')
										$('#cus_info').removeClass('active')
										$('#pwd_chg').removeClass('active')
										$('#alarm').removeClass('active')
										$('#ref_mgmt').removeClass('active')
										$('#withdrawal').removeClass('active')
										$('#exchange_test').removeClass('active')
										$('#exchange').removeClass('active')
										auth_mgmt.onCreate()
									}else{
										alert('고객님 계좌를 확인해주세요.')
										var tab_id = $(this).attr('data-tab')
										$(this).addClass('active')
										$("#"+tab_id).addClass('active')
										$('#cus_info').removeClass('active')
										$('#pwd_chg').removeClass('active')
										$('#alarm').removeClass('active')
										$('#ref_mgmt').removeClass('active')
										$('#withdrawal').removeClass('active')
										$('#exchange_test').removeClass('active')
										$('#exchange').removeClass('active')
										auth_mgmt.onCreate()
									}
								}
							})

						})
					}
				})
			})
		})
	}
	
	
	return { onCreate }
})()
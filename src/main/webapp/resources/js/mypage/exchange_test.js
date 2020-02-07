var exchange_test = exchange_test || {}
exchange_test =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'

	let _, js, mypage_vue_js, global_map_js, exth, exrateSess, profitsChart, 
		bdate_exist_flag, deposit, exchangeCount, getCno, line_graph_js, disableDays
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		mypage_vue_js = js + '/vue/mypage_vue.js'
		global_map_js = js + '/maps/global_map.js'
		line_graph_js = js + '/exchart/line_graph.js'
		exth = []
		exrateSess = {}
		profitsChart = {}
		bdate_exist_flag = false
		deposit = 100000000
		exchangeCount = 0
		getCno = $.cusInfo().cno
		
		exrateSess.flag = 'default'
		exrateSess.bdate = common.clock_format()	
		sessionStorage.setItem('exrateSess', JSON.stringify(exrateSess))
		disableDays = []
	}
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(mypage_vue_js)
		)
		.done(()=>{
			setContentView()
			retention_amount()
			exchange_popup()
			
			$('#exchange_datepicker b')
			.text(`환율 기준일 : ${common.clock_format()}`)
			
			$.getJSON(`${_}/datepicker/selectall`, d=>{
				$.each(d.dpk, (i, j)=>{
					disableDays[i] = j.ddate
				})
//				alert('disableDays ' + JSON.stringify(disableDays))
			})
			
			datepicker_option()
			$('#exchange_datepicker img')
			.click(()=>{
				$('#ui-datepicker-div').css({display:'block', 'vertical-align': 'middle'})
			})
			
			$('#datepicker').datepicker()
			.change(()=>{
				amount_history()
				
				exrateSess.flag = 'select'
				exrateSess.bdate = $('#datepicker').val()
				sessionStorage.setItem('exrateSess', JSON.stringify(exrateSess));
				
				$('#world_map')
				.html(`<div class="mapcontainer">
					        <div class="map">
					            <span>Alternative content for the map</span>
					        </div>
					    </div>`)
				  
				$.getScript($.js() + '/maps/global_map.js')
				
			})
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})	
	}
	let setContentView =()=>{
		$('head')
		.append(mypage_vue.exchange_test_head())
		
		$('#root div.mypage')
		.html(mypage_vue.exchange_test())

		$('#popup-exchange')
		.html(mypage_vue.exchange_popup())
		.hide()
		
		$('#exchange_datepicker')
		.css({
			height : '60px',
			margin : '10px auto',
			'text-align' : 'center'
		})	
	}
	
	let exchange_popup =()=>{
		$('<button/>')
		.text('환전하기')
		.css({
			width: '100%',
		    height: '70px',
		    'background-color': '#0077c8',
		    'text-align': 'center',
		    'line-height': '1',
		    color: '#ffffff',
		    'margin-top': '20px'	// 11px
		})	
		.appendTo('#exchange_box')
		.click(()=>{
			exchangeCount++
			let receive_currencies = $('#exchange_' + $('#exchange_box .amount-row .receive h3').text()),
				send_currencies = $('#exchange_' + $('#exchange_box .amount-row .send h3').text()),
				sub_calc = parseFloat(common.comma_remove(send_currencies.text()))
							- parseFloat(common.comma_remove($('#exchange_send_amount').val())),
				exchange_KRW = $('#exchange_KRW')
		
			if(sub_calc >= 0){
				send_currencies
				.text(common.comma_create(sub_calc.toFixed(2)))
				
				let add_calc = parseFloat(common.comma_remove(receive_currencies.text()))
							+ parseFloat(common.comma_remove($('#exchange_box input.receive-amount').val()))
					
				receive_currencies
				.text(common.comma_create(add_calc.toFixed(2)))
			}else{
				alert(`${$('#exchange_box .amount-row .send h3').text()} 보유 금액이 부족합니다.`)
			}
				
			if( exchange_KRW.text().indexOf('.') > -1 ){
				exchange_KRW.text(exchange_KRW.text().substring(0, exchange_KRW.text().indexOf('.')))
			}
			
			common.total_amount_calc()
			
			$('#popup-exchange')
			.hide()
		})
	
		common.popup_close('exchange')
	}
	
	let retention_amount =()=>{
		let data = [ { id: 'total_money', currencies : "총 보유금액", money: common.comma_create(deposit), cntcd : 'KRW' },
			{ id: 'exchange_KRW', currencies : "대한민국 한화", money: common.comma_create(deposit), cntcd : 'KRW' },
			{ id: 'exchange_USD', currencies : "미국 달러", money: '0', cntcd : 'USD' },
			{ id: 'exchange_AUD', currencies : "호주 달러", money: '0', cntcd : 'AUD' },
			{ id: 'exchange_EUR', currencies : "유럽 유로", money: '0', cntcd : 'EUR' },
			{ id: 'exchange_CNY', currencies : "중국 위안", money: '0', cntcd : 'CNY' },
			{ id: 'exchange_JPY', currencies : "일본 엔", money: '0', cntcd : 'JPY' }]

		$.each(data, (i,j)=>{
			$(`<li><p style="font-size : 18px width:120px;">${j.currencies}</p>
					<p id="${j.id}" style="color : #2dccd3; font-size : 18px; margin-right : 10px; min-width:120px; width:35%; text-align: right; ">${common.comma_create(j.money)}</p>
					<p class="fs-block" style="font-size : 18px">${j.cntcd}</p>
				</li>`)
			.css({
				'font-size' : '18px'
			})
			.appendTo('#amount ol')
			
			$('#amount')
			.css({ float : 'left'})
			})
			$('#init_btn').css({
				width:'50%',
				float : 'left',
				'text-align' : 'center'
			})
			
			$('<button/>')
			.text('초기화')
			.addClass('btn btn-lg btn-primary')
			.appendTo('#init_btn')
			.click(()=>{
				$.ajax({
					url : `${_}/exth/delete/${getCno}`,
					type : 'DELETE',
					contentType : 'application/json',
					success : d=>{
						amount_init()
						exth = []
						$('#exchange_test_chart').empty()
					},
					error : e=>{
						alert('ajax 실패')
					}
				})
			})
			
			$('#save_btn').css({
				width:'50%',
				float : 'left',
				'text-align' : 'left'
			})
			
			$('<button/>')
			.text('저장')
			.addClass('btn btn-lg btn-primary')
			.appendTo('#save_btn')
			.click(()=>{
//				alert('저장 시 exth - ' + JSON.stringify(exth))
				if( exth.length > 0 ){
					amount_history()
					common.object_sort(exth)
					
					$.ajax({
						url : `${_}/exth/insert/${deposit}`,
						type : 'POST',
						data : JSON.stringify(exth),
						dataType : 'JSON',
						contentType : 'application/json',
						success : d=>{
//							alert('exth - ' + JSON.stringify(exth))
						//	exth = []
							
							profitsChart= d.exth
							sessionStorage.setItem('profitsChart', JSON.stringify(profitsChart))
							sessionStorage.setItem('chartFlag', 'profitsChart')
							
//							alert('profitsChart : ' + JSON.stringify($.profitsChart()))
//							alert('chartFlag : ' + $.chartFlag())
							$.getScript(line_graph_js)
							
						/*	$('#test_history').empty()
							$.each(d.exth, (i, j)=>{
								$(`<div> bdate :${j.bdate} - profits : ${j.profits}, total : ${j.total}, rerate : ${j.rerate}, krw : ${j.krw}, usd : ${j.usd}, aud : ${j.aud}, 
								eur : ${j.eur}, cny : ${j.cny}, jpy : ${j.jpy} </div>`)
								.appendTo('#test_history')
							})*/
						},
						error : e=>{
							alert('ajax 실패')
						}
					})
				}else{
					alert('환전을 해주세요.')
				}
			})
	}
	
	let datepicker_option =()=>{
		
		$('head').append(`<style type="text/css">
							.ui-datepicker-week-end { color:red; }
							.ui-datepicker-week-end .ui-state-default { color:red; }
						</style>`)
						

		$.datepicker.setDefaults({
	        dateFormat: 'yymmdd',
	        prevText: '이전 달',
	        nextText: '다음 달',
	        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
	        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
	        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
	        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
	        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
	        showMonthAfterYear: true,
	        yearSuffix: '년',
	        yearRange: "2019:2020"
	    })
	    
		$('#datepicker').datepicker({
			// datepicker 애니메이션 타입
			// option 종류 : "show" , "slideDown", "fadeIn", "blind", "bounce", "clip", "drop", "fold", "slide"
			showAnim : "slideDown",
			// 해당 월의 다른 월의 날짜가 보이는 여부, 예를 들면 10월이면 전후에 9월 마지막과 11월의 시작 일이 보이는 여부입니다. 즉, 달력이 꽉 차 보이게 하는 것
			showOtherMonths: true,
			// 선택 여부 (showOtherMonths 옵션과 같이 일치시키지 않으면 에러가 발생합니다.)
			selectOtherMonths: true,
			// 달력 밑에 오늘과 닫기 버튼이 보인다.
			showButtonPanel: false,
			// 년 월이 셀렉트 박스로 표현 되어서 선택할 수 있다.
			changeMonth: false,
			changeYear: false,
			// 한번에 보이는 개월 수
			numberOfMonths: 1,
			// 데이터 포멧
			dateFormat: "yy-mm-dd",
			// 텍스트 박스 옆의 달력 포시
			showOn: "button",
			//이미지 타입인지 버튼 타입인지 설정
			buttonImageOnly: true,
			// 이미지 경로
			buttonImage: "https://jqueryui.com/resources/demos/datepicker/images/calendar.gif",
			// 버튼 타입이면 버튼 값
			buttonText: "Select date",
			// alt 데이터 포멧
			altFormat: "DD, d MM, yy",
			// 선택 가능한 날짜(수 형식) - 현재 기준 -20일
//			minDate: -20,
			// 선택 가능한 최대 날짜(문자 형식) - 현재 기준 +1월 +20일
			maxDate: "0M 0D",
			// 주 표시
//			showWeek: true
			beforeShowDay: function(date){
			    let day = date.getDay();
				let thismonth = date.getMonth()+1;
				let thisday = date.getDate();

				if(thismonth < 10){
					thismonth = "0"+thismonth;
				}
				if(thisday < 10){
					thisday = "0"+thisday;
				}
				
			    ymd = date.getFullYear() + "-" + thismonth + "-" + thisday;
			    
			    for(let i=0; i<disableDays.length; i++){
			    	if ( $.inArray(ymd, disableDays) != -1 ) {		
//			    		alert(ymd + ' === ' + disableDays[i] )
				        return [false]	// ,'' , disableDaysName[i]
				    }
			    }

			    return [(day != 0 && day != 6)]
			}		
		})
	}

	let amount_init =()=>{
		$('#total_money').text(common.comma_create(100000000))
		$('#exchange_KRW').text(common.comma_create(100000000))
		$('#exchange_USD').text(0)
		$('#exchange_AUD').text(0)
		$('#exchange_EUR').text(0)
		$('#exchange_CNY').text(0)
		$('#exchange_JPY').text(0)
	}
	let amount_history =()=>{
		let bdate_exist
		if(exchangeCount > 0){
			$.each(exth, (i, j)=>{
				if(exrateSess.bdate === j.bdate ){	//	날짜가 같을 시 오버라이딩 시키기
//					alert('날짜 같음')
					bdate_exist_flag = true
					bdate_exist = i
				}
			})
			if( bdate_exist_flag === true ){
//				alert('오버라이딩')
				exth[bdate_exist] = { bdate : exrateSess.bdate,
						total : common.comma_remove($('#total_money').text()), 
						krw : common.comma_remove($('#exchange_KRW').text()), 
						usd : common.comma_remove($('#exchange_USD').text()), 
						aud : common.comma_remove($('#exchange_AUD').text()), 
						eur : common.comma_remove($('#exchange_EUR').text()), 
						cny : common.comma_remove($('#exchange_CNY').text()), 
						jpy : common.comma_remove($('#exchange_JPY').text()),
						cno : getCno }
				bdate_exist_flag = false
			}else{
				exth.push({	bdate : exrateSess.bdate,
						total : common.comma_remove($('#total_money').text()), 
						krw : common.comma_remove($('#exchange_KRW').text()), 
						usd : common.comma_remove($('#exchange_USD').text()), 
						aud : common.comma_remove($('#exchange_AUD').text()), 
						eur : common.comma_remove($('#exchange_EUR').text()), 
						cny : common.comma_remove($('#exchange_CNY').text()), 
						jpy : common.comma_remove($('#exchange_JPY').text()),
						cno : getCno	})
			}
			exchangeCount = 0
		}
		
	}
	return { onCreate }
})()
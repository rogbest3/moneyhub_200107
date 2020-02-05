var exchange = exchange || {}
exchange =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, mypage_vue_js, exChart_js, remit_box_js, line_graph_js, nav_vue_js
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		mypage_vue_js = js + '/vue/mypage_vue.js'
		exChart_js = js + '/mypage/exChart.js'
		remit_box_js = js + '/remit/remit_box.js'
		line_graph_js = js + '/exchart/line_graph.js'
		nav_vue_js = js + '/vue/nav_vue.js'
	}
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(mypage_vue_js),
			$.getScript(remit_box_js),
			$.getScript(nav_vue_js)
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
		$('#root div.mypage')
		.html(mypage_vue.exchange())
		$.getScript(exChart_js)
		
		$('#popup-root')
		.html(main_vue.cntcd_popup())
		.hide()
		
		$('#popup-exchange').empty()
		
		//최근 한 달간의 환율 가져올 수 있나?
		//(오늘 데이터 - 전일 데이터) > 0 => 상승
		//(오늘 데이터 - 전일 데이터) < 0 => 하락
		
		
		//환율 추이
		/*$('#expect').blur(function(){
			if(expect.test($('#expect').val())){
				$('#exchange_check').text('최근 1주일간 해당 환율은 상승세입니다.')
				$('#exchange_check').css('color', 'blue')
			}else{
				$('#exchange_check').text('최근 1주일간 해당 환율은 하락세입니다.')
				$('#exchange_check').css('color', 'red')
			}
		})*/
		
		$(function(){
			$('#exchangebutton').one('click', function(){
				$('#chart').fadeIn()
				$('#exchange_check').text('최근 약 한 달간 해당 환율은 상승세입니다.')
				$('#exchange_check').css('color', 'blue')
				$('#exchange_check').css('text-align', 'center')
				$('#exchange_check').css('font-weight', 'bold')
				$.getScript(exChart_js)
				$(this).click(function(){
					if(confirm('환전하시겠습니까? 확인을 누르시면 바로 실행됩니다.')){
						$('#auth_mgmt').each(function(){
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
						})
					}
				})
			})
		})
	}
	
	
	return { onCreate }
})()
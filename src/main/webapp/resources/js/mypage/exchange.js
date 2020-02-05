var exchange = exchange || {}
exchange =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, mypage_vue_js, exChart_js, remit_box_js, line_graph_js
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		mypage_vue_js = js + '/vue/mypage_vue.js'
		exChart_js = js + '/mypage/exChart.js'
		remit_box_js = js + '/remit/remit_box.js'
		line_graph_js = js + '/exchart/line_graph.js'
	}
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(mypage_vue_js),
			$.getScript(remit_box_js)
		)
		.done(()=>{
			setContentView()
			remit_box.onCreate({ flag : 'mypage', cntcd : '' })
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
		
	}
	let setContentView =()=>{
		$('#root div.mypage')
		.html(mypage_vue.exchange())
		$.getScript(line_graph_js)
		
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
			$('#exchangebutton')
			.click(function(){
				$("#chart").fadeIn()
				$.getScript(line_graph_js)

			})
		})
	}
	
	
	return { onCreate }
})()
"use strict"
var adminIndex = adminIndex || {}
adminIndex =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, cookie_js, adminIndex_vue_js, members_js
		,fee_js, exchangeDB_js, profitChart_js
		, qna_js, adminIndexHome_vue_js, app_js
	
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		cookie_js = js + '/cmm/cookie.js'
		adminIndex_vue_js = js + '/admin_vue/adminIndex_vue.js'
		members_js = js + '/admin/members.js'
		fee_js = js + '/admin/fee.js'
		exchangeDB_js = js + '/admin/exchangeDB.js'
		profitChart_js = js + '/admin/profitChart.js'
		qna_js = js + '/admin/qna.js'
		adminIndexHome_vue_js = js + '/admin_vue/adminIndexHome_vue.js'
		app_js = js + '/app.js'
	}
	
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(cookie_js),
			$.getScript(adminIndex_vue_js),
			$.getScript(members_js),
			$.getScript(fee_js),
			$.getScript(exchangeDB_js),
			$.getScript(profitChart_js),
			$.getScript(qna_js),
			$.getScript(adminIndexHome_vue_js),
			$.getScript(app_js)
		)
		.done(()=>{
			setContentView()
			
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
	}
	
	let setContentView =()=>{
		$('head').empty()
		$('body').empty()
		$(adminIndex_vue.main_head()).appendTo('head')
		$(adminIndex_vue.main_body()).appendTo('body')	
		$.getJSON(_+'/admin/memberNowExchange',d=>{
			$('<tr><td>'+d.memberNowExchange+'원</td></tr>').appendTo('#memberNowExchange')
		})
		$.getJSON(_+'/admin/memberTotalBalance',d=>{
			$('<tr><td>'+d.memberTotalBalance+'원</td></tr>').appendTo('#memberTotalBalance')
		})
		$.getJSON(_+'/admin/totalProfit',d=>{
			$('<tr><td>'+d.totalProfit+'원</td></tr>').appendTo('#totalProfit')
		})
		$.getJSON(_+'/admin/memberNowCount',d=>{
			$('<tr><td>'+d.memberNowCount+'명</td></tr>').appendTo('#memberNowCount')
		})
		leftMenuEvent()
	}	
	
	let leftMenuEvent = () => {
		$('#adminHome').click(()=>{
			$('div.container-fluid').empty()
			$('div.container').empty()
			$('div.container-fluid').html(adminIndexHome_vue.home_body())
		})
		$('#members').click(()=>{
			$('div.container-fluid').empty()
			$('div.container').empty()
			members.onCreate()
		})
		$('#fee').click(e=>{
			e.preventDefault()
			$('div.container-fluid').empty()
			$('div.container').empty()
			fee.onCreate()
		})
		$('#exchangeDB').click(()=>{
			$('div.container-fluid').empty()
			$('div.container').empty()
			exchangeDB.onCreate()
		})
		$('#adminLogout').click(()=>{
			app.onCreate()
			$('html').scrollTop(0)
		})
		
		
		//EJ fee test
		/*$('#cusmain').click(()=>{
			alert('클릭했다')
		})*/
	}
	
	
	return { onCreate }
})()
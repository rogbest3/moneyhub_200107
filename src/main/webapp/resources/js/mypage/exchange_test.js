var exchange_test = exchange_test || {}
exchange_test =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, mypage_vue_js, retention_amount_js, remit_box_js
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		mypage_vue_js = js + '/vue/mypage_vue.js'
		retention_amount_js = js + '/maps/retention_amount.js'
		remit_box_js = js + '/mypage/remit_box.js'
	}
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(mypage_vue_js),
			$.getScript(retention_amount_js),
			$.getScript(remit_box_js)
			
		)
		.done(()=>{
			setContentView()
			retention_amount.onCreate()
			exchange_popup()
			remit_box.onCreate('')
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
		    'margin-top': '11px'
		})	
		.appendTo('#exchange_box')
		.click(()=>{
			alert('환전하기')
		})
	
		$('#popup-exchange .moin-close')
		.click(e=>{
			e.preventDefault()
			$('#popup-exchange')
			.hide()
		})
	}
	return { onCreate }
})()
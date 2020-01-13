var exchange_test = exchange_test || {}
exchange_test =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		mypage_vue_js = js + '/vue/mypage_vue.js'
	}
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(mypage_vue_js)
		)
		.done(()=>{
			setContentView()
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
		
	}
	let setContentView =()=>{
//		alert('모의 test')
		$('head')
		.append(mypage_vue.exchange_test_head())
		$('#root div.mypage')
		.html(mypage_vue.exchange_test())
		
	}
	return { onCreate }
})()
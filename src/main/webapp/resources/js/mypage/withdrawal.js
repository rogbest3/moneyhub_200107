"use strict"
var withdrawal = withdrawal || {}
withdrawal =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, nav_vue_js, mypage_vue_js
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		mypage_vue_js = js + '/vue/mypage_vue.js'
	}
	let onCreate =()=>{
		alert('withdrawal onCreate 들어옴')
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
		$('#root div.mypage')
		.html(mypage_vue.withdrawal())
	}
	
	return { onCreate }
})()
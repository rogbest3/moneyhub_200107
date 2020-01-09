"use strict"
var withdrawal = withdrawal || {}
withdrawal =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, img, withdrawal_vue_js
	
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		img = $.img()
		withdrawal_vue_js = js + '/vue/withdrawal_vue.js'
	}
	
	let onCreate =()=>{
		alert('withdrawal.onCreate 들어옴')
		init()
		$.when(
			$.getScript(withdrawal_vue_js)
		)
		.done(()=>{
			setContentView()
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
	}
	
	let setContentView =()=>{
		alert('withdrawal.setContentView 들어옴')
		withdrawal_vue.withdrawal()
	}
	
	return { onCreate }
})()
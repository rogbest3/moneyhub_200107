"use strict"
var sidebar = sidebar || {}
sidebar = (()=>{
	let _, js, nav_vue_js, exchange_test_js
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		nav_vue_js = js + '/vue/nav_vue.js'
		exchange_test_js = js + '/vue/nav_vue.js'
	}
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(nav_vue_js)
		)
		.done(()=>{
			setContentView()
			mypage_move()
		})
		.fail(()=>{
			alert()
		})
	}
	let setContentView =()=>{
		$('#root div.themoin-main')
		.html(nav_vue.sidebar_cus())
		cus_info.onCreate()
	}
	
	let mypage_move =()=>{
		$('#cus_info')
		.click(e=>{
			e.preventdefault
			cus_info.onCreate()
		})
		
		$('#pwd_chg')
		.click(e=>{
			e.preventdefault
			pwd_chg.onCreate()
		})
		
		$('#auth_mgmt')
		.click(e=>{
			e.preventdefault
			auth_mgmt.onCreate()
		})
		
		$('#alarm')
		.click(e=>{
			e.preventdefault
			alarm.onCreate()
		})
		
		$('#ref_mgmt')
		.click(e=>{
			e.preventdefault
			ref_mgmt.onCreate()
		})
		
		$('#withdrawal')
		.click(e=>{
			e.preventdefault
			withdrawal.onCreate()
		})
		
		$('#exchange_test')
		.click(e=>{
			e.preventdefault
			exchange_test.onCreate()
		})
	}
	return { onCreate }
})()
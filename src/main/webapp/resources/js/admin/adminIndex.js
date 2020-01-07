"use strict"
var adminIndex = adminIndex || {}
adminIndex =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, cookie_js, adminIndex_vue_js, tables_mgmt_js
	
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		cookie_js = js + '/cmm/cookie.js'
		adminIndex_vue_js = js + '/admin_vue/adminIndex_vue.js'
		tables_mgmt_js =  js + '/admin/tables_mgmt.js'
	}
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(cookie_js),
			$.getScript(adminIndex_vue_js),
			$.getScript(tables_mgmt_js)
		)
		.done(()=>{
			setContentView()
			tables_mgmt.onCreate()
			
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
	}
	
	let setContentView =()=>{
		$(adminIndex_vue.main_head()).appendTo('head')
		$('body').html(adminIndex_vue.main_body())
	}

	return { onCreate }
})()
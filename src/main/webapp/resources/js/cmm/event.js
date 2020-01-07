"use strict"
var event = event || {}
event =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, img, event_vue_js, main_class
	
	let init =x=>{
		_ = $.ctx()
		js = $.js()
		img = $.img()
		event_vue_js = js + '/vue/event_vue.js'
		main_class = x
	}
	let onCreate =x=>{
		init(x)
		$.when(
			$.getScript(event_vue_js)
		)
		.done(()=>{
			setContentView()
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
	}
	
	let setContentView =()=>{
		$('.' + main_class)
		.html(event_vue.event(img))
		$('html').scrollTop(0);
	}
	
	return { onCreate }
})()
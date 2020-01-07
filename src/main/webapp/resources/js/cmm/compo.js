"use strict"
var compo = compo || {}
compo =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, img, compo_vue_js, main_class
	
	let init =x=>{
		_ = $.ctx()
		js = $.js()
		img = $.img()
		compo_vue_js = js + '/vue/compo_vue.js'
		main_class = x
	}
	let onCreate =x=>{
		init(x)
		$.when(
			$.getScript(compo_vue_js)
		)
		.done(()=>{
			setContentView(x)
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
	}
	
	let setContentView =()=>{
		$('.' + main_class)
		.html(compo_vue.compo(img))
		$('html').scrollTop(0);
	}
	
	return { onCreate }
})()
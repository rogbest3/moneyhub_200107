"use strict"
var cus_info = cus_info || {}
cus_info =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, nav_vue_js, mypage_vue_js, cookie_js
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		mypage_vue_js = js + '/vue/mypage_vue.js'
		cookie_js = js + '/cmm/cookie.js'
	}
	
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(mypage_vue_js),
			$.getScript(cookie_js)
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
		.html(mypage_vue.cus_info())
		
		//$('#infoEmail').val(getCookie("CEMAIL"))
		/*$('#infoEmail').text(getCookie("CEMAIL"))
		$('#infoName').text(getCookie("CNAME"))
		$('#infoCntcd').text(getCookie("CNTCD"))
		$('#infoZip').text(getCookie("ZIP"))
		$('#infoAddr').text(getCookie("ADDR"))
		$('#infoAddr2').text(getCookie("ADDR"))
		$('#infoPhone').text(getCookie("CPHONE"))*/
		
		$.getJSON(_+'/customers/cusInfo/'+ $('#cemail').val(), d=>{
			alert('여기 들어옴?')
			alert(d.cusInfo)
//			$('#infoEmail').text(getCookie("CEMAIL"))
//			$('#infoName').text(getCookie("CNAME"))
//			$('#infoCntcd').text(getCookie("CNTCD"))
//			$('#infoZip').text(getCookie("ZIP"))
//			$('#infoAddr').text(getCookie("ADDR"))
//			$('#infoAddr2').text(getCookie("ADDR"))
//			$('#infoPhone').text(getCookie("CPHONE"))
		})
		
		$('<button/>')
			.text('정보수정하기')
			.addClass('next')
			.css({ 'margin-bottom' : '40px' })
			.appendTo('.themoin-mypage-profile')
			.click(()=>{
				cus_info_chg.onCreate()
			})
	}
		
	return { onCreate }
})()
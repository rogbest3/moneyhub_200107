"use strict"
var auth_mgmt = auth_mgmt || {}
auth_mgmt =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, main_vue_js, exch, cus, acc,mypage_vue_js
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		exch = $.exch()
		cus = $.cusInfo()
		acc = $.acc()
		main_vue_js = js + '/vue/main_vue.js'
		mypage_vue_js = js +'/vue/mypage_vue.js'
	}
	
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(main_vue_js),
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
		$('#root .themoin-main')
		.html(mypage_vue.auth_mgmt())

        let exch = $.exch()
        let exchKrw = exch.exchKrw
        let bsdate = exch.bsdate
		
		$('#copy_btn').on('click', function(e){
			var text = $('#account').html()
			$('#clip_target').val(text)
			$('#clip_target').select()
			try { 
				var successful = document.execCommand('copy');
				if(successful){
					alert('복사되었습니다.')
				}else{
					alert('복사실패')
				}
			} catch (err) { 
				alert('이 브라우저는 지원하지 않습니다.') 
			}
		})
		
	}
	
	return { onCreate }
})()
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
		$('#cfm_cpwd').blur(function(){
			if($('#cpwd').val() != $('#cfm_cpwd').val()){
				$('#pwd2_check').text('비밀번호가 일치하지 않습니다.')
				$('#pwd2_check').css('color','red')
			}else{
				$('#pwd2_check').text('비밀번호가 일치합니다.')
				$('#pwd2_check').css('color','blue')
			}
		})
		$('<button/>')
		.text('회원탈퇴')
		.addClass('account-send-btn')
		.appendTo('.themoin-mypage .content form')
		.click(e=>{
			e.preventDefault()
			app.onCreate()
			/*$.ajax({
				url : _ + '/customers/withdrawal',
				type : 'POST',
				data : JSON.stringify({
					cpwd : $('#cpwd').val()
				}),
				dataType : 'json',
				contentType : 'application/json',
				success : d=>{
					if(d.msg === 'SUCCESS'){
						app.onCreate()
					}
					else{
						$('#login_pwd').text('이메일 및 비밀번호를 확인해주세요.')
						$('#login_pwd').css('color', 'red')
					}
				},
				error : e=>{
					alert('login ajax 실패')
				}
			})*/
		})
	}
	
	return { onCreate }
})()
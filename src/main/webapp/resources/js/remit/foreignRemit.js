"use strict"
var foreignRemit = foreignRemit || {}
foreignRemit = (()=>{
	
	const WHEN_ERR = '레미트 js파일을 찾지 못했습니다.'
	let _,js,auth_js,main_vue_js,remit_vue_js,cookie_js,deal

	let init = ()=>{
		_ = $.ctx()
		js = $.js()
		main_vue_js = js + '/vue/main_vue.js'
		auth_js = js + '/cmm/auth.js'
		cookie_js = js + '/cmm/cookie.js'
		remit_vue_js = js + '/remit/remit_vue.js'
		deal = sessionStorage.getItem('deal')
	}
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(remit_vue_js)
		)
		.done(()=>{
		setContentView()
		$('#first_remit_btn').click(()=>{
			remit_sec()
			})
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
	}
	
	let setContentView = ()=>{
		$('.themoin-main')
		.html(remit_vue.remit_first())
		$('.themoin-footer').empty()
		if(deal >= 3000)
		{$('#fee_check').text('12$')}
		else {$('#fee_check').text('6$')}
	}
	let remit_sec =()=>{
		$('.themoin-main')
		.html(remit_vue.remit_sec())
		$('#sec_remit_btn').click(()=>{
				remit_third()
			})
		$('#prev_fs_remit_btn').click(()=>{
			onCreate()
			})
	}
	let remit_third = ()=>{
		$('.themoin-main')
		.html(remit_vue.remit_third())
		$('#third_remit_btn').click(()=>{
			remit_review()
		})
		$('#prev_sec_remit_btn').click(()=>{
			remit_sec()
			})
	}
	let remit_review = ()=>{
		$('.themoin-main')
		.html(remit_vue.remit_review())
		$('#complete_remit_btn').click(()=>{
			remit_complete()
			$('html').scrollTop(0);
		})
	}
	let remit_complete =()=>{
		$('.themoin-main')
		.html(remit_vue.remit_complete())
		$('#main_user_btn').click(()=>{
			mypage.onCreate()
			$('html').scrollTop(0);
		})
	}
	return {onCreate}
})();
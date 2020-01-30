"use strict"
var foreignRemit = foreignRemit || {}
foreignRemit = (()=>{
	
	const WHEN_ERR = '레미트 js파일을 찾지 못했습니다.'
	let _,js,auth_js,main_vue_js,remit_vue_js,cookie_js,amount,deal,remit_box_js,clock,cus

	let init = ()=>{
		_ = $.ctx()
		js = $.js()
		deal = $.deal()
		cus = $.cusInfo()
		main_vue_js = js + '/vue/main_vue.js'
		auth_js = js + '/cmm/auth.js'
		cookie_js = js + '/cmm/cookie.js'
		remit_vue_js = js + '/remit/remit_vue.js'
		remit_box_js = js + '/remit/remit_box.js'
	}

	let onCreate =()=>{
		init()
		$.when(
			$.getScript(remit_vue_js),
			$.getScript(remit_box_js)
		)
		.done(()=>{
		setContentView()
		remit_deal()
		remit_box.onCreate('')

		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
	}
	
	let setContentView = ()=>{
		$('.themoin-main')
		.html(remit_vue.remit_first(deal))
		$('.themoin-footer').empty()
	}
	
	let remit_deal = ()=>{
		if(deal.amount >= 3000)
		{$('#fee_check').text('12')}
		else {$('#fee_check').text('6')}
		
		$('#sd_amount').keyup(()=>{
			if($('#sd_amount').val() >= 3000)
			{$('#fee_check').text('12')}
			else {$('#fee_check').text('6')}
		})
		
		
		$('#first_remit_btn').click(()=>{
			deal.amount =  document.getElementById('sd_amount').value //송금액을 바꿨을 때 금액
			deal.fee = document.getElementById('fee_check').innerHTML
			sessionStorage.setItem('deal',JSON.stringify(deal))
			remit_cusInfo()
			})
	}
	let remit_cusInfo =()=>{
		$('.themoin-main')
		.html(remit_vue.remit_cusInfo(deal))
		$('#sec_remit_btn').click(()=>{
				remit_rcpt()
			})
		$('#prev_fs_remit_btn').click(()=>{
			onCreate()
			})
	}
	let remit_rcpt = ()=>{
		$('.themoin-main')
		.html(remit_vue.remit_rcpt(deal))
		$('#third_remit_btn').click(()=>{
			deal.rcpsf =  document.getElementById('pass_fnm').value  //수취인 이름
			deal.rcpsl =  document.getElementById('pass_lnm').value	//수취인 성
			deal.rcemail =  document.getElementById('rcpt_email').value //수취인 이메일
			deal.cno = cus.cno
			sessionStorage.setItem('deal',JSON.stringify(deal))
			remit_review()
		})
		$('#prev_sec_remit_btn').click(()=>{
			remit_cusInfo()
			})
	}
	let remit_review = ()=>{
		$('.themoin-main')
		.html(remit_vue.remit_review(deal)) 
		
		$('#complete_remit_btn')
		.click( e => {  //송금액, 수수료, 입금액,수취자 여권이름(성,이름),수취국가, 수취이메일
			e.preventDefault()
			//======================================화면 작업용 no 에이작스
			/*remit_complete()
			$('html').scrollTop(0);*/
			//=============================================
			$.ajax({
				url: _+'/remit/insert',
				type : 'POST',
				data : JSON.stringify(deal),
				contentType :'application/json',
				success : () => {
					alert("ajax성공")
					remit_complete()
					$('html').scrollTop(0);
				},
				error : (request,status,error) => {
					alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
				}
			})
		})
	}
	let remit_complete =()=>{
		$('.themoin-main')
		.html(remit_vue.remit_complete(deal))

		let m = `입금 기한 ${Math.floor(3600 / 60)} : ${(3600 % 60)}`	// 숙제
		alert(msg_time())
		$('#deposit_hour').text(msg_time().msg)

		$('#main_user_btn').click(()=>{
			mypage.onCreate()
			$('html').scrollTop(0);
		})
	}
	
/*	function msg_time() {	// 1초씩 카운트
		let SetTime = 3600
		m = `입금 기한 ${Math.floor(3600 / 60)} : ${(3600 % 60)}`	// 남은 시간 계산
		SetTime--;					// 1초씩 감소
	}
	function time_count(){
		msg_time()
		setInterval(msg_time, 1000);
	}
	*/
	var SetTime = 3600;		// 최초 설정 시간(기본 : 초)
	function msg_time() {	// 1초씩 카운트
		var msg = `입금 기한 ${Math.floor(3600 / 60)} : ${(3600 % 60)}`	// 남은 시간 계산
		document.all.ViewTimer.innerHTML = msg;		// div 영역에 보여줌 
		SetTime--;					// 1초씩 감소
	}
	function time_count(){
		msg_time()
		setInterval(msg_time, 1000);
	}
	
	return {onCreate}
})();
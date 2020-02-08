"use strict"
var mypage = mypage || {}

mypage =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, cmm_vue_js, nav_vue_js, main_vue_js, mypage_vue_js, 
		auth_js, compo_js, event_js, faq_js, main_class, withdrawal_js,
		line_graph_js,deal,guide_recieve_js, remit_box_js,clock, exch

	let init =()=>{
		_ = $.ctx()
		js = $.js()
		exch = $.exch()
		cmm_vue_js = js + '/vue/cmm_vue.js'
		nav_vue_js = js + '/vue/nav_vue.js'
		main_vue_js = js + '/vue/main_vue.js'
		mypage_vue_js = js + '/vue/mypage_vue.js'
		compo_js = js + '/cmm/compo.js'
		event_js = js + '/cmm/event.js'
		faq_js = js + '/cmm/faq.js'
		guide_recieve_js = js + '/cmm/guide_recieve.js'
		main_class = 'themoin-main'
		withdrawal_js = '/mypage/withdrawal.js'
		line_graph_js = js + '/exchart/line_graph.js'
		remit_box_js = js + '/remit/remit_box.js'
	}
	
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(cmm_vue_js),
			$.getScript(nav_vue_js),
			$.getScript(main_vue_js),
			$.getScript(mypage_vue_js),
			$.getScript(compo_js),
			$.getScript(event_js),
			$.getScript(faq_js),
			$.getScript(guide_recieve_js),
			$.getScript(line_graph_js),
			$.getScript(remit_box_js)
		)
		.done(()=>{
			setContentView()
			page_move()	
			remit_receive()
			setInterval(clock_excute, 1000)
			setInterval(exchange_API, 1000 * 60 * 60 * 12) // 1000 * 60 : 1분, 
			remit_box.onCreate({ flag : 'mypage', cntcd : '' })
			remit_list({ nowPage : 0})
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
		
	}
	let setContentView =()=>{
		//숙제 제이쿼리 슬라이드 이벤트 js생성 화면 분할 
		$('#remit_slider').hide()
		$('#remit_click').click(()=>{
			$('#remit_slider').slideDown()
		})
		
		$('#root')
		.html(nav_vue.logined_nav(_))
		.append(main_vue.logined_main())
		.append(cmm_vue.footer())
		
		//송금 usd 환율 세션에 저장
		//	common.receive_value_calc(deal.exrate)
		

		$('#popup-exchange').empty()

	}

	let page_move =()=>{
		$('#mgmt')
		.click(()=>{
			sidebar.onCreate()
			$('html').scrollTop(0);
		})
		
		$('#logout')
		.click(()=>{
			sessionStorage.setItem('cus', null); // 로그아웃 클릭하면 세션에 담긴 고객정보를 비운다. 
			sessionStorage.setItem('exrateSess',JSON.stringify({}))
			app.onCreate()
			$('html').scrollTop(0)
		})
		$('#compo')
		.click(()=>{
			compo.onCreate(main_class)
		})
		
		$('#event')
		.click(()=>{
			event.onCreate(main_class)
		})
		
		$('#faq')
		.click(()=>{
			faq.onCreate(main_class)
		})
		
		$('#guide')
		.click(()=>{
			guide_recieve.onCreate(main_class)
		})
		
		$('.themoin-header a.logo')
		.click(()=>{
			mypage.onCreate()
			$('html').scrollTop(0);
		})
	}
	let clock_excute =()=>{
		clock = new Clock()
		$('#clock').text(`실시간 모인 환율 - ${clock.year}년 ${clock.month+1}월 ${clock.clockDate}일` +
				` ${clock.hours < 10 ? `0${clock.hours}` : clock.hours}:${clock.minutes < 10 ? `0${clock.minutes}` : clock.minutes }:${clock.seconds < 10 ? `0${clock.seconds }` : clock.seconds }`)
	}

	let exchange_API =()=>{
		$.getJSON('https://api.manana.kr/exchange/rate/KRW/'+
				'KRW,USD,JPY,CNY,SGD,AUD,GBP,NPR,EUR.json', d=>{

			let arr = []
			$.each(d, (i, j)=>{
				arr.push({bdate : j.date.substr(0, 10), 
					cntcd : j.name.substr(0, 3),
					exrate : j.rate.toFixed(2)})
			})
			
			$.ajax({
				url : _ + `/exrate/insert/api`,
				type : 'POST',
				data : JSON.stringify({ 'paramList' : arr }),
				dataType : 'json',
				contentType : 'application/json',
				success : d=>{
					alert('성공')
				},
				error : e=>{
					alert('전송 실패')
				}
				
			})
		})
	}
	
	let remit_receive = ()=>{
		deal = $.deal()
			let exrate_arr = []
			$.getJSON( '/web/exrate/search/cntcd/' + 'USD', d=>{	
				$.each(d.exlist, (i, j)=>{
					exrate_arr.push(parseFloat(j.exrate))
				})
				deal.exrate = exrate_arr[0]
				sessionStorage.setItem('deal',JSON.stringify(deal))
			})
				$('.form-calculator .amount-row input.send-amount').keyup(()=>{
					common.receive_value_calc(deal.exrate)
				})
	
		$('<button/>')
		.text('송금하기')
		.addClass('index-send-btn moin-body')
		.appendTo('#remit_box')
		.click(()=>{
			
			deal.cntp =$('.form-calculator .amount-row .receive p').text() 
			deal.cntcd = $('.form-calculator .amount-row .receive h3').text()
			deal.trdusd = common.comma_remove($('.form-calculator .amount-row input.send-amount').val())
			sessionStorage.setItem('deal',JSON.stringify(deal))
			alert('송금 버튼 클릭했을때 '+JSON.stringify(deal))
			foreignRemit.onCreate()
			
		})
	}
	
	let remit_list =(x)=>{
		//숙제 두개의 테이블 정보를 담음-> 정보 뿌리는 방법? ->sql에서 셀렉트 cno, 기준일 비교해서 가져오기
		$.getJSON( `${_}/remit/lists/page/${x.nowPage}/search`, d=>{
			/*console.log(`들어온 알씨피티`+stringifyJSON(d.rcpt))*/
			$('.remits').empty()
			
			$.each(d.trdhr, (i, j)=>{ 
				$(`<div class="themoin-main-remititem">
						<div class="simple">
							<div class="unit-flag">
								<img src="https://img.themoin.com/public/img/circle-flag-us.svg">
							</div>
							<div class="simple-nametime">
								<h3 class="username">
								</h3>
								<p class="create-time">${j.bsdate}</p>
							</div>
							<div class="simple-spacer"></div>
							<div class="simple-amount">
								<div class="user-sendlistdetail-amount">
									<h3 class="user-sendlist-send">
										<span class="user-sendlist-send">${j.trdKrw}</span> <span
											class="user-sendlist-sendunit">KRW</span>
									</h3>
									<img src="https://img.themoin.com/public/img/ic-next-p.png"
										class="user-sendlist-ic">
									<h3 class="user-sendlist-receive">
										<span class="user-sendlist-receive">${j.trdUsd}</span> <span
											class="user-sendlist-receiveunit">USD</span>
									</h3>
								</div>
								<p>적용 환율 : 1 USD = ${j.exrate} KRW</p>
								<div class="send-due">
									<p>가상계좌 입금 이용 시간이 만료되었습니다.</p>
								</div>
							</div>
						</div>
					</div>
					`)
			    .appendTo('.remits')
			})
			
			/*$(`<div class="themoin-pagination"></div>`)
			.appendTo('.remits')
			$(`<button class="control disabled">
		         	이전
		         </button>`)
		         .appendTo('.themoin-pagination')
		         $(`<button class="paginator current"></ui>`)
			.appendTo('.themoin-pagination') 
			$(`<button class="control disabled" disabled="">다음
		        	</button>`)
		        .appendTo('.themoin-pagination')*/
			/*$.each(d.rcpt, (i, j)=>{
				$(`<span class="fs-block" lang="en" title="a aaa a">${j.rcpsl}${j.rcpsf}</span>`)
				 .appendTo('.username')
			})*/
			
			//숙제 페이지네이션 코드 이해
			let pxy = d.pager
			/*****************************************/
//			if(pxy.existPrev){
//				$(`<button class="control disabled">
//		         	이전
//		         </button>`)
//		         .appendTo('.themoin-pagination')
//		         .click(()=>{
//		        	 mypage.remit_list({ nowPage : pxy.prevBlock})
//		         })
//			}
			/*****************************************/
			$(`<button class="paginator current"></button>`)
			.appendTo('.themoin-pagination') 
			for(let i = pxy.startPage; i<= pxy.endPage; i++){
					$(`<button>
							${i+1}
						</button>`)
				.appendTo('.paginator')
				.click(function(e){
					e.preventDefault()
					mypage.remit_list({ nowPage : i})
				})
				
				if( pxy.nowPage == i ){
					$(`<button class="paginator current" >
								${i+1}
							</button>`)
					.appendTo('.paginator')		
					$('html').scrollTop(0);
				}else{
					$(`<button>
								${i+1}
							</button>`)
					.appendTo('.paginator')
					.click(function(e){
						e.preventDefault()
						mypage.remit_list({ nowPage : i})
					})
				}
			}
			if(pxy.existNext){ //<button class="control disabled" disabled="">다음</button>
				$(`<button class="control disabled" disabled="">다음
		        	</button>`)
		        .appendTo('.themoin-pagination')
		        .click(()=>{
		        	mypage.remit_list({ nowPage : pxy.nextBlock})
		        })
			}

		})
	}
	
	return { onCreate }
})()
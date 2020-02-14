"use strict"
var mypage = mypage || {}

mypage =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, cmm_vue_js, nav_vue_js, main_vue_js, mypage_vue_js, 
		auth_js, compo_js, event_js, faq_js, main_class, withdrawal_js,
		line_graph_js,deal, remit_box_js, clock, profitsChart,cus, exch,
		exchange_js

	let init =()=>{
		_ = $.ctx()
		js = $.js()
		cus = $.cusInfo()
		exch = $.exch()
		
		cmm_vue_js = js + '/vue/cmm_vue.js'
		nav_vue_js = js + '/vue/nav_vue.js'
		main_vue_js = js + '/vue/main_vue.js'
		mypage_vue_js = js + '/vue/mypage_vue.js'
		compo_js = js + '/cmm/compo.js'
		event_js = js + '/cmm/event.js'
		faq_js = js + '/cmm/faq.js'
		main_class = 'themoin-main'
		withdrawal_js = '/mypage/withdrawal.js'
		line_graph_js = js + '/exchart/line_graph.js'
		remit_box_js = js + '/remit/remit_box.js'
		exchange_js = js + '/mypage/exchange.js'
		
		profitsChart = {}
		sessionStorage.setItem('profitsChart', JSON.stringify(profitsChart))
		sessionStorage.setItem('chartFlag', '')
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
			$.getScript(remit_box_js),
			$.getScript(exchange_js)
		)
		.done(()=>{
			setContentView()
			page_move()	
			remit_receive()
			setInterval(clock_excute, 1000)
			setInterval(exchange_API, 1000 * 60 * 60 * 12)
			remit_box.onCreate({ flag : 'mypage', cntcd : '' })
			remit_list({ nowPage : 0, cno : cus.cno})
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
		
	}
	let setContentView =()=>{
		$('#remit_slider').hide()
		
		$('#root')
		.html(nav_vue.logined_nav(_))
		.append(main_vue.logined_main())
		.append(cmm_vue.footer())
		
		$.getScript(line_graph_js)

		$('#popup-exchange').empty()
		
		$('#remit_btn')
		.click(function(){
		$("#remit_slider").show();
		var top = $('#remit_slider').offset().top - 75;
		$('html').scrollTop(top);
		$('#exchange_slider').hide()
		remit_box.onCreate({ flag : 'mypage', cntcd : '' })
		})
		
		$('#exchange_btn')
		.click(function(){
			exchange.onCreate()
		})
	}

	let page_move =()=>{
		$('#exch')
		.click(()=>{
			/*alert('클릭')*/
//			sidebar.onCreate('')
			exchange.onCreate('')
			$('html').scrollTop(0);
		})
		
		$('#remit')
		.click(()=>{
			
			$('html').scrollTop(0);
		})
		
		$('#testexch')
		.click(()=>{
			
			$('html').scrollTop(0);
		})
		
		$('#mgmt')
		.click(()=>{
			sidebar.onCreate('')
			$('html').scrollTop(0);
		})
		
		$('#logout')
		.click(()=>{
			sessionStorage.setItem('cus', null); 
			sessionStorage.setItem('deal', JSON.stringify({}));
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
		
		$('.themoin-header a.logo')
		.click(()=>{
			mypage.onCreate()
			$('html').scrollTop(0);
		})
		
		$('#exchange_test_btn')
		.click(()=>{
			exchange_test.onCreate()
			$('html').scrollTop(0);
		})
		
	}
	
	let clock_excute =()=>{
		clock = new Clock()
		$('#clock').text(`실시간 머니허브 환율 - ${clock.year}년 ${clock.month+1}월 ${clock.clockDate}일` +
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
		
		if(deal.cntp == '미국'){
			$('.form-calculator .amount-row .receive img').attr("src",`https://img.themoin.com/public/img/circle-flag-us.svg`)
		}
		
		let send_amount = $('.form-calculator .amount-row input.send-amount')
		let exrate_arr = []
			$.getJSON( '/web/exrate/search/cntcd/' + 'USD', d=>{	
				$.each(d.exlist.reverse(), (i, j)=>{
						exrate_arr.push(parseFloat(j.exrate).toFixed(2))
				})
				deal.exrate = exrate_arr[exrate_arr.length-1]
				sessionStorage.setItem('deal',JSON.stringify(deal))
			})
			
			$('.form-calculator .amount-row input:text[numberOnly].send-amount').keyup(function(){
					$(this).val($(this).val().replace(/[^0-9]/g,""))
					if($(this).val() >5000) {
							send_amount.val(5000)
							$('#max_amount').text('송금 가능 금액은 5,000$입니다.')
					}
					common.receive_value_calc(deal.exrate)
			})
	
			$('<button/>')
			.text('송금하기')
			.addClass('index-send-btn moin-body')
			.appendTo('#remit_box')
			.click(()=>{
				deal.cntp =$('.form-calculator .amount-row .receive p').text() 
				deal.cntcd = $('.form-calculator .amount-row .receive h3').text()
				deal.trdusd = common.comma_remove(send_amount.val())
				sessionStorage.setItem('deal',JSON.stringify(deal))
				foreignRemit.onCreate()
				$('html').scrollTop(top);
			})
	}
	
	let remit_list =(x)=>{
		deal = $.deal()
		$.getJSON( `${_}/remit/lists/page/${x.nowPage}/search/${x.cno}`, d=>{
			let pxy = d.pager

			let receive_data = [ { img : 'jp', cntcd : 'JPY', curr : '일본'},
				{ img : 'cn', cntcd : 'CNY', curr : '중국'},
				{ img : 'us', cntcd : 'USD', curr : '미국'},
				{ img : 'sg', cntcd : 'SGD', curr : '싱가포르'},
				{ img : 'au', cntcd : 'AUD', curr : '호주'},
				{ img : 'gb', cntcd : 'GBP', curr : '영국'},
				{ img : 'vn', cntcd : 'VND', curr : '베트남'},
				{ img : 'be', cntcd : 'EUR', curr : '벨기에'},
				{ img : 'fr', cntcd : 'EUR', curr : '프랑스'},
				{ img : 'de', cntcd : 'EUR', curr : '독일'},
				{ img : 'it', cntcd : 'EUR', curr : '이탈리아'},
				{ img : 'nl', cntcd : 'EUR', curr : '네덜란드'},
				{ img : 'pt', cntcd : 'EUR', curr : '포르투갈'},
				{ img : 'es', cntcd : 'EUR', curr : '스페인'}]
			
			$('.remits').empty()
			if(pxy.rowCount != 0){
				
				$.each(d.map, (i, j)=>{
					$.each(receive_data, (i, k)=>{
						if(j.cntCd == k.cntcd && j.cntp == k.curr){
							j.img = k.img
						}
					})

					$(`<div class="themoin-main-remititem">
							<div class="simple">
								<div class="unit-flag">
									<img src="https://img.themoin.com/public/img/circle-flag-${j.img}.svg">
								</div>
								<div class="simple-nametime">
									<h3 class="username">
									<span class="fs-block" lang="en" title="a aaa a">${j.passLnm} ${j.passFnm}</span>
									</h3>
									<p class="create-time">${j.bsdate}</p>
								</div>
								<div class="simple-spacer"></div>
								<div class="simple-amount">
									<div class="user-sendlistdetail-amount">
										<h3 class="user-sendlist-send">
											<span class="user-sendlist-send">${common.comma_create(j.trdKrw)}</span> <span
												class="user-sendlist-sendunit">KRW</span>
										</h3>
										<img src="https://img.themoin.com/public/img/ic-next-p.png"
											class="user-sendlist-ic">
										<h3 class="user-sendlist-receive">
											<span class="user-sendlist-receive">${common.comma_create(j.trdUsd)}</span> <span
												class="user-sendlist-receiveunit">USD</span>
										</h3>
									</div>
									<p>적용 환율 : 1 USD = ${j.exrate} KRW</p>
									<div class="send-due">
										<p>송금이 정상적으로 완료되었습니다.</p>
									</div>
								</div>
								<div class="simple-spacer"></div>
								<div class="user-sendlist-status">
								<div class="user-sendlist-state">
								<div class="user-sendlist-state-text moin-body">거래 완료</div>
								</div>
								<a id = "delete_history" class="user-sendlist-state-delete moin-body desktop">내역 삭제</a>
								<img src="https://img.themoin.com/public/img/btn-open-list-blue.svg">
								</div>
							</div>
						</div>`)
				    .appendTo('.remits')
				})
				
				
				$(`<div class="themoin-pagination"></div>`).appendTo('.remits')
				if(pxy.existPrev){
					$(`<button class="control">
			         	이전
			         </button>`)
			         .appendTo('.themoin-pagination')
			         .click(()=>{
			        	 mypage.remit_list({ nowPage : pxy.prevBlock, cno : cus.cno})
			         })
				}else{
					$(`<button class="control disabled">
			         	이전
		         </button>`)
		         .appendTo('.themoin-pagination')}
		         
				for(let i = pxy.startPage; i<= pxy.endPage; i++){
						$(`<button class="paginator>
								${i+1}
							</button>`)
					.appendTo('.paginator')
					.click(function(e){
						e.preventDefault()
						mypage.remit_list({ nowPage : i, cno : cus.cno})
					})
					
					if( pxy.nowPage == i ){
						$(`<button class="paginator  current">
									${i+1}
								</button>`)
						.appendTo('.themoin-pagination')		
						$('html').scrollTop(0);
					}else{
						$(`<button  class="paginator">
									${i+1}
								</button>`)
						.appendTo('.themoin-pagination')

						.click(function(e){
							e.preventDefault()
							mypage.remit_list({ nowPage : i, cno : cus.cno})
						})
					}
				}
				
	        	if(pxy.existNext){
					$(`<button class="control">다음
			        	</button>`)
			        .appendTo('.themoin-pagination')
			        .click(()=>{
			        	mypage.remit_list({ nowPage : pxy.nextBlock, cno : cus.cno})
			        })
				}else{
					$(`<button class="control disabled">다음
		        	</button>`)
		        	.appendTo('.themoin-pagination')
				}
			}else if(pxy.rowCount == 0){
				$(`<div class="remits empty">
					<br><h3>아직 송금 내역이 없습니다.</h3>
					<button class="start" id="start">여기를 눌러 송금을 시작하세요.</button><br><br>
					<img src="https://img.themoin.com/public/img/icon-null-illust.svg"><br><br>
				</div>`).appendTo('.user-limit')
				$('#start').click(()=>{
					$("#remit_slider").toggle();
					var top = $('#remit_slider').offset().top - 75;
					$('html').scrollTop(top);
				})
			}
		})
	}
	
	return { onCreate,remit_list }
})()
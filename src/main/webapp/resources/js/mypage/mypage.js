"use strict"
var mypage = mypage || {}
mypage =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, cmm_vue_js, nav_vue_js, main_vue_js, mypage_vue_js, 
		auth_js, compo_js, event_js, faq_js, main_class, withdrawal_js,
		line_graph_js
	let init =()=>{
		_ = $.ctx()
		js = $.js()
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
			$.getScript(faq_js)
//			$.getScript(line_graph_js)
	//		$.getScript(withdrawal_js)
		)
		.done(()=>{
			setContentView()
			page_move()		
			setInterval(clock_excute, 1000)
			setInterval(exchange_API, 1000 * 60 * 60 * 12) // 1000 * 60 : 1분, 
			popup()
			remit_box()
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
		
	}
	let setContentView =()=>{
		$('#root')
		.html(nav_vue.logined_nav(_))
		.append(main_vue.logined_main())
		.append(cmm_vue.footer())
		
		$.getScript(line_graph_js)
		
		$('<button/>')
		.text('송금하기')
		.addClass('index-send-btn moin-body')
		.appendTo('#remit_box')
		.click(()=>{
			foreignRemit.onCreate()
		})
	}
	let remit_box =()=>{
		let send = $('#remit_box .amount-row input.send-amount')
		let send_value = numberFormat(send.val())	
		send.val(send_value)
	}
	
	let numberFormat =x=>{
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
	}
	
	let popup =()=>{
		$('#remit_box .amount-row .receive')
		.click(e=>{
			e.preventDefault()
			$('#popup-root')
			.show()
		})
		
		let data = [ { img : 'jp', cntcd : 'JPY', curr : '일본 엔' },
					{ img : 'cn', cntcd : 'CNY', curr : '중국 위안' },
					{ img : 'us', cntcd : 'USD', curr : '미국 달러' },
					{ img : 'sg', cntcd : 'SGD', curr : '싱가포르 달러' },
					{ img : 'au', cntcd : 'AUD', curr : '호주 달러' },
					{ img : 'gb', cntcd : 'GBP', curr : '영국 파운드' },
					{ img : 'np', cntcd : 'NPR', curr : '네팔 루피' },
					{ img : 'be', cntcd : 'EUR', curr : '벨기에 유로' },
					{ img : 'fr', cntcd : 'EUR', curr : '프랑스 유로' },
					{ img : 'de', cntcd : 'EUR', curr : '독일 유로' },
					{ img : 'it', cntcd : 'EUR', curr : '이탈리아 유로' },
					{ img : 'nl', cntcd : 'EUR', curr : '네덜란드 유로' },
					{ img : 'pt', cntcd : 'EUR', curr : '포르투갈 유로' },
					{ img : 'es', cntcd : 'EUR', curr : '스페인 유로' }]
		
		$.each(data, (i, j)=>{
			$(`<li><img src="https://img.themoin.com/public/img/circle-flag-${j.img}.svg"><a><p>${j.cntcd}</p><p>${j.curr}</p></a></li>`)
			.appendTo('#popup_box ul')
			.click(()=>{
				$('#popup-root')
				.hide()
				$('#remit_box .amount-row .receive p').text(`${j.curr.substring(0, j.curr.indexOf(' '))}`)
				$('#remit_box .amount-row .receive h3').text(`${j.cntcd}`)
				
				$('#chart')
				.html(`<canvas id="canvas" style="width:70%; height:110px"></canvas>`)
				
				$.getScript(line_graph_js)
			})
		})
		
		$('#popup-root .moin-close')
		.click(e=>{
			e.preventDefault()
			$('#popup-root')
			.hide()
		})
	}
	
	let page_move =()=>{
		$('#mgmt')
		.click(()=>{
			sidebar.onCreate()
			$('html').scrollTop(0);
		})
		
		$('#logout')
		.click(()=>{
			sessionStorage.setItem('cemail', null)
			sessionStorage.setItem('cname', null)
	/*		alert(`email : ${$.cemail()}`)
			if( $.cemail() !== 'null' ){
				alert(`null 아닐 때  ${$.cemail()}`)
			}else{
				alert(`null 일 때  ${$.cemail()}`)
			}*/
			
			app.onCreate()
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
		
	}
	let clock_excute =()=>{

		let date = new Date();
		let year = date.getFullYear()
		let month = date.getMonth()
		let clockDate = date.getDate()
		let day = date.getDay()
		let hours = date.getHours()
		let minutes = date.getMinutes()
		let seconds = date.getSeconds()
		$('#clock').text(`실시간 모인 환율 - ${year}년 ${month+1}월 ${clockDate}일` +
				` ${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes }` : minutes }:${seconds < 10 ? `0${seconds }` : seconds }`)
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
	return { onCreate }
})()
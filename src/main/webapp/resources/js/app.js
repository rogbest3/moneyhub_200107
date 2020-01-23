"use strict"
var app = app || {}
app =(()=>{
	const WHEN_ERR = '0 - js파일을 찾지 못했습니다.'
	let _, js, img, cmm_vue_js, nav_vue_js, main_vue_js, 
		auth_js, compo_js, event_js, faq_js, main_class,
		tables_mgmt_js,remit_popup_js
	
	let run =x=>{
		$.getScript( x + '/resources/js/cmm/router.js', ()=>{
			$.extend(new Session(x))
			init()
			onCreate()
		})
	}
	
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		img = $.img()
		cmm_vue_js = js + '/vue/cmm_vue.js'
		nav_vue_js = js + '/vue/nav_vue.js'
		main_vue_js = js + '/vue/main_vue.js'
		auth_js = js + '/cmm/auth.js'
		compo_js = js + '/cmm/compo.js'
		event_js = js + '/cmm/event.js'
		faq_js = js + '/cmm/faq.js'
		main_class = 'themoin-landing'
		tables_mgmt_js =  js + '/tables/tables_mgmt.js'
		remit_popup_js = js + '/remit/remit_popup.js'
	}
	
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(cmm_vue_js),
			$.getScript(nav_vue_js),
			$.getScript(main_vue_js),
			$.getScript(auth_js),
			$.getScript(compo_js),
			$.getScript(event_js),
			$.getScript(faq_js),
			$.getScript(tables_mgmt_js),
			$.getScript(remit_popup_js)
		)
		.done(()=>{
			setContentView()
			page_move()

//			popup()
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
	}
	
	let setContentView =()=>{
		$('head')
		.append(cmm_vue.head())

		$('#root')
		.html(nav_vue.nav(_))
		.append(main_vue.main())
		.append(cmm_vue.footer())
		
		$('#popup-root')
		.html(main_vue.cntcd_popup())
		.hide()
		
		$('.unit-select receive')
		.click(()=>{
			$('#root')
			.append(remit_popup.nation())
		})
		
		$('<button/>')
		.text('송금하기')
		.addClass('index-send-btn moin-body')
		.appendTo('#remit_box')
		.click(()=>{
			auth.onCreate('login')
		})
	}
	
	let page_move =()=>{
		$('#join')
		.click(()=>{
			auth.onCreate('join')
		})
		
		$('#login')
		.click(()=>{
			auth.onCreate('login')
		})
		
		$('#tables_mgmt_a')
		.click(()=>{
			tables_mgmt.onCreate()
		})

		$('#admin_login')
		.click(()=>{
			adminIndex.onCreate('admin_login')
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
			app.onCreate()
			$('html').scrollTop(0);
		})
		
	}
	
/*	let popup =()=>{
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
			})
		})
		
		$('#popup-root .moin-close')
		.click(e=>{
			e.preventDefault()
			$('#popup-root')
			.hide()
		})
	}*/
	return { run, onCreate }
})()
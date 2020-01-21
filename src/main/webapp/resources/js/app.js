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
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
	}
	
	let setContentView =()=>{
		$('head')
		.append(cmm_vue.head())


		if(sessionStorage.getItem('CUS') != '' &&sessionStorage.getItem('CUS') != null ){
			$('#root')	.html(nav_vue.logined_nav(_))
			$('#root').append(main_vue.logined_main())
		}else{
			$('#root')	.html(nav_vue.nav(_))
			$('#root').append(main_vue.main())
		}
		$('#root').append(cmm_vue.footer())
		
/*		function LayerPop(data){
			document.getElementById("iPophead").innerHTML = data.viewNm;
			document.getElementById("i_LayPop").src = data.url;
			layerPop.style.width = data.width;
			layerPop.style.height = data.height;

			var width = $("#layer-pop").width();
			var height = $("#layer-pop").height();
			
			var iPopCont = document.getElementById("iPopCont");
			var bodyHt = parseInt(height) - 50;
			
			iPopCont.style.height = bodyHt ;
			
			ifmMaskPop.style.display = 'block';
			layerPop.style.left = ($(window).width() - width) / 2;
			layerPop.style.top = ($(window).height() - height) / 2;
			
			layerPop.style.display = 'block';

		};
		
		function popClose(){
			layerPop.style.display = 'none';
			ifmMaskPop.style.display = 'none';
		}*/
		
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
	
	return { run, onCreate }
})()
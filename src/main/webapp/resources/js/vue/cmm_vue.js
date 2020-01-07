var cmm_vue = cmm_vue || {}
cmm_vue = {
	head : ()=>{
		return '<head>'+
		'	<meta charset="utf-8">'+
		'	<meta http-equiv="X-UA-Compatible" content="IE=edge">'+
		'	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, viewport-fit=cover">'+
		'	<meta name="description" content="빠르고 저렴하게 해외로 돈을 보낼 수 있는 해외송금서비스, 중국송금, 일본송금, 싱가포르송금, 미국송금, 호주송금">'+
		'	<meta property="og:type" content="website">'+
		'	<meta property="og:title" content="머니허브(MoneyHub) 해외송금">'+
		'	<meta property="og:description" content="빠르고 저렴하게 해외로 돈을 보낼 수 있는 해외송금서비스">'+
		'	<meta property="og:image" content="https://img.themoin.com/public/img/meta_link_thumbnail.png">'+
		'	<meta property="og:url" content="https://www.themoin.com">'+
		'	<meta name="application-name" content="머니허브(MoneyHub) 해외송금">'+
		'	<meta name="msapplication-TileColor" content="#ffffff">'+
		'	<meta name="msapplication-TileImage" content="/ms-icon-144x144.png">'+
		'	<meta name="theme-color" content="#ffffff">'+
		'	<link rel="canonical" href="https://www.themoin.com">'+
		'	<link rel="manifest" href="https://www.themoin.com/manifest.json">'+
		'	<link rel="alternate" hreflang="ko" href="https://www.themoin.com/ko">'+
		'	<link rel="alternate" hreflang="en" href="https://www.themoin.com/en">'+
		'	<link rel="alternate" hreflang="x-default" href="https://www.themoin.com/">'+
		
		'	<!--카카오 css-->'+
		'	<link href="/web/resources/css/kabang.css" rel="stylesheet" type="text/css">'+
		
		
		'<!-- Add a banner for Appstore link -->'+
		'	<meta name="apple-itunes-app" content="app-id=1228063143">'+
		'	<title>머니허브(MoneyHub) 해외송금</title>'+
		
		'<!-- Google Tag Manager -->'+
		'<!--	<script type="text/javascript" async="" src="//cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js"></script> '+
		'	<script type="text/javascript" async="" src="https://cdn.channel.io/plugin/ch-plugin-web.js" charset="UTF-8"></script>'+
		'	<script async="" crossorigin="anonymous" src="https://edge.fullstory.com/s/fs.js"></script>'+
		'	<script type="text/javascript" async="" src="//cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js"></script>'+
		'	<script src="https://connect.facebook.net/signals/config/990202451106612?v=2.9.13&amp;r=stable" async=""></script>'+
		'	<script async="" src="https://connect.facebook.net/en_US/fbevents.js"></script>'+
		'	<script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script>'+
		' -->'+
		'<!-- End Google Tag Manager -->'+
//		'	<link href="https://www.kakaobank.com/products_static/css/common/pc.css" rel="stylesheet" type="text/css">'+
		'	<link href="https://www.kakaobank.com/products_static/css/event/list/style.css" rel="stylesheet" type="text/css">'+

		'	<!-- Bootstrap core CSS -->'+
		'	<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css" rel="stylesheet">'+
		/*'	<link href="https://www.themoin.com/moin.bundle.css" rel="stylesheet">'+*/
		'	<link href="/web/resources/css/moin.bundle.css" rel="stylesheet" type="text/css">'+
		'	<script src="https://cdn.onesignal.com/sdks/OneSignalPageSDKES6.js?v=150710" async=""></script>'+
		'</head>'
	},
	footer : ()=>{
		return '<div class="themoin-footer">'+
		'	<div>'+
		'		<div class="section top">'+
		'			<div class="contact">'+
		'				<h3><b><a id="compo" class="">회사 소개</a></b></h3>'+
	/*	'				<h3>언어별 고객 센터</h3>'+
		'				<h3 class="phone ko">한국어<!-- --> <br> 02-333-3333 / 070-1234-5678</h3>'+
		'				<p><span>평일 : 09:00 ~ 18:00 (주말/공휴일 휴무)</span><br>팩스 : 0504-123-4567<br>이메일 : support@moneyhub.com<br>카카오톡 플러스친구 : @머니허브 MONEYHUB</p>'+
		'				<h3 class="phone np">नेपाली<!-- --> <br> 070-4367-0297</h3>'+
		'				<p><span>Weekday : 12:45 ~ 21:45</span><br>email : abc@moneyhub.com</p>'+
		'				<h3 class="business">비즈니스 및 제휴 문의 <br> 070-1234-5678</h3>'+*/
		'			</div>'+
		'			<div class="spacer"></div>'+
		'			<div class="social">'+
		'				<h3><b><a id="faq" class="">F A Q</a></b></h3>'+
/*		'				<h3 class="desktop">Follow Us</h3>'+
		'				<a href="https://www.facebook.com/moincompany" target="new">'+
		'					<img src="https://img.themoin.com/public/img/btn-facebook.svg">'+
		'					<span class="desktop">머니허브 페이스북 페이지</span>'+
		'				</a>'+
		'				<a href="http://blog.naver.com/moin_company" target="new">'+
		'					<img src="https://img.themoin.com/public/img/btn-blog.svg">'+
		'					<span class="desktop">머니허브 네이버 블로그</span>'+
		'				</a>'+
		'				<a href="https://plus.kakao.com/home/ne7qlhac" target="new" style="width:240px">'+
		'					<img src="https://img.themoin.com/public/img/btn-kakaotalk.svg">'+
		'					<span class="desktop">머니허브 카카오톡 플러스친구</span>'+
		'				</a>'+*/
		'			</div>'+
		'			<div class="spacer"></div>'+
		'			<div class="links">'+
		'        		<h3><b><a id="event" class="">이벤트 페이지</a></b></h3>'+
/*		'				<h3 class="desktop">Company</h3>'+
		'				<a id="compo" class="caption">회사 소개</a>'+
		'				<a class="caption">서비스 소개</a>'+
		'				<a class="caption">이용약관</a>'+
		'				<a class="caption">개인정보 취급방침</a>'+
		'				<a id="faq" class="caption">F A Q</a>'+
		'        		<a id="event" class="caption">이벤트 페이지</a>'+
		'				<a class="caption">공지사항</a>'+
		'				<h3 class="event-univ">학생 및 기관 할인</h3>'+
		'				<a class="caption">학생 및 기관 할인등록 페이지</a>'+*/
		'			</div>'+
		'		</div>'+
		'		<div class="section bottom">'+
		'			<div class="company">'+
		'				<img src="/web/resources/img/logo/gray_logo.png">'+
		'				<p>'+
		'							(주)머니허브 | 대표이사 : 양현미 | 사업자등록번호 : 123-45-67890'+
		'							<br>'+
		'							소액해외송금업 등록번호 : 2019-12'+
		'							<br>'+
		'							주소 : 서울시 마포구 백범로 23 구프라자 3층'+
		'							<br>'+
		'							© 2019 MONEYHUB, Inc. All Rights Reserved.'+
		'						</p>'+
		'			</div>'+
		'			<div class="spacer"></div>'+
		'		</div>'+
		'	</div>'+
		'</div>'+
		'<!-- <div style="display:none"></div>		 -->'
	}
}
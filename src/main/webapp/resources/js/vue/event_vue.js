var event_vue = event_vue || {}
event_vue ={
	event : x=>{
		return '  <div id="mArticle">'+
//		'    <h1 class="screen_out">이벤트 목록</h1>'+
		'    <div class="event-list" style="padding-top : 40px">'+
		'      <ul class="tab-event" role="tablist">'+
		'          <li class="item on"><a href="?expired=false" class="link" role="tab" aria-selected="true">진행중 이벤트</a></li>'+
		'          <li class="item"><a href="?expired=true" class="link" role="tab" aria-selected="false">종료된 이벤트</a></li>'+
		'      </ul>'+
		'      <div class="tab-event-content">'+
		'          <ul id="listEvent" class="list-event" data-list-cnt="30">'+
		'              <li class="item1" style="margin: 0 0 0 210px">'+
		'                  <a href="" class="linkthumb" target="_blank">'+
		'					<img src="'+x+'/event1.jpg/" alt="머니허브 sns 이벤트" class="img" style="width:50%"></a>'+
		'                  <em class="emph">#머니허브 #머니허브sns이벤트</em>'+
		'                  <div class="tit-area">'+
		'                    <strong class="tit"><a href="" target="_blank">머니허브 sns 이벤트</a></strong>'+
		'                  </div>'+
		'                <span class="datetime">'+
		'                  <time datetime="2019-12-30">2019.12.30</time>'+
		'                  ~ <time datetime="2020-03-31">2020.03.31</time>'+
		'                </span>'+
		'              </li><br/><br/>'+
		'              <li class="item1" style="margin: 0 0 0 210px">'+
		'                  <a href="" class="linkthumb" target="_blank">'+
		'					<img src="'+x+'/event2.jpg/" alt="머니허브 첫 송금 시 1만원 페이백" class="img" style="width:50%"></a>'+
		'                  <em class="emph">#머니허브 #머니허브페이백 #머니허브송금</em>'+
		'                  <div class="tit-area">'+
		'                    <strong class="tit"><a href="" target="_blank">머니허브 첫 송금 시 1만원 페이백</a></strong>'+
		'                  </div>'+
		'                <span class="datetime">'+
		'                  <time datetime="2019-12-30">2019.12.30</time>'+
		'                  ~ <time datetime="2020-03-31">2020.03.31</time>'+
		'                </span><br/><br/>'+
		'              </li>'+
/* 		'              <li class="item ">'+
		'                  <a href="https://www.kakaobank.com/events/8" class="link-thumb" target="_blank"><img src="https://og.kakaobank.io/view/f6e32b1f-ac92-4844-a162-1cc1e2bb6762" alt="머니허브 체크카드로 결제하면, 입장료 50% 할인" class="img"></a>'+
		'                  <em class="emph">#체크카드 #라뜰리에</em>'+
		'                  <div class="tit-area">'+
		'                    <strong class="tit"><a href="https://www.kakaobank.com/events/8" target="_blank">머니허브 체크카드로 결제하면, 입장료 50% 할인</a></strong>'+
		'                  </div>'+
		'                <span class="datetime">'+
		'                  <time datetime="2019-11-01">2019.11.01</time>'+
		'                  ~ <time datetime="2019-12-31">12.31</time>'+
		'                </span>'+
		'              </li>'+
		'              <li class="item ">'+
		'                  <a href="https://www.kakaobank.com/events/5" class="link-thumb" target="_blank"><img src="https://og.kakaobank.io/view/f730a33f-0520-4d13-aa4f-49156db9795b" alt="머니허브 주식계좌 개설하기 이벤트 연장" class="img"></a>'+
		'                  <em class="emph">#주식계좌 #한국투자증권</em>'+
		'                  <div class="tit-area">'+
		'                    <strong class="tit"><a href="https://www.kakaobank.com/events/5" target="_blank">머니허브 주식계좌 개설하기 이벤트 연장</a></strong>'+
		'                  </div>'+
		'                <span class="datetime">'+
		'                  <time datetime="2019-08-01">2019.08.01</time>'+
		'                  ~ <time datetime="2019-12-31">12.31</time>'+
		'                </span>'+
		'              </li>'+ */
		'              <li class="item1" style="margin: 0 0 0 210px">'+
		'                  <a href="" class="linkthumb" target="_blank">'+
		'					<img src="'+x+'/event3.jpg/" alt="머니허브 회원가입 시 별다방 커피 증정 이벤트" class="img" style="width:50%"></a>'+
		'                  <em class="emph">#머니허브 #머니허브회원가입 #머니허브커피</em>'+
		'                  <div class="tit-area">'+
		'                    <strong class="tit"><a href="" target="_blank">머니허브 회원가입 시 별다방 커피 증정 이벤트</a></strong>'+
		'                  </div>'+
		'                <span class="datetime">'+
		'                  <time datetime="2019-12-30">2019.12.30</time>'+
		'                  ~ <time datetime="2020-03-31">2020.03.31</time>'+
		'                </span><br/><br/>'+
		'              </li>'+
		'          </ul>'+
		'      </div>'+
		'    </div>'+
		'  </div>'+
		'</main>'+
		/*'<script type="text/javascript" id="">!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","394144084521930");fbq("set","agent","tmgoogletagmanager","394144084521930");fbq("track","PageView");</script>'+
		'<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=394144084521930&amp;ev=PageView&amp;noscript=1"></noscript>'+
		'<div id="appPopup" class="layer-popup" role="alertdialog" aria-modal="true">'+
		'  <div class="box">'+
		'    <strong class="tit">머니허브 앱에서<br> 확인 가능합니다.</strong>'+
		'    <a href="javascript:;" class="btn-confirm" role="button" data-close="true">확인</a>'+
		'  </div>'+
		'</div>'+
		'<div id="checkPopup" class="layer-popup" role="alertdialog" aria-modal="true">'+
		'  <div class="box">'+
		'    <strong class="tit">당첨 개별공지 이벤트입니다.</strong>'+
		'    <p class="desc">당첨된 분께는 입력한 연락처로<br>개별 안내드렸습니다.</p>'+
		'    <a href="javascript:;" class="btn-confirm" role="button" data-close="true">확인</a>'+
		'  </div>'+
		'</div>'+*/
		'</div>'

	}
}
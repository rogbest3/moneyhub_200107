var event_vue = event_vue || {}
event_vue ={
	event : x=>{
		return   '<div id="mArticle">'+
		'				    <div class="event-list" style="padding-top : 40px">'+
		'				      <ul class="tab-event" role="tablist">'+
		'				          <li class="item on"><a href="?expired=false" class="link" role="tab" aria-selected="true">진행중 이벤트</a></li>'+
		'				          <li class="item"><a href="?expired=true" class="link" role="tab" aria-selected="false">종료된 이벤트</a></li>'+
		'				      </ul>'+
		'				      <div class="tab-event-content">'+
		'				          <ul id="listEvent" class="list-event" data-list-cnt="30">'+
		'				              <li class="item1" style="margin: 0 0 0 210px">'+
		'				                  <a href="" class="linkthumb" target="_blank">'+
		'									<img src="'+x+'/event1.jpg/" alt="머니허브 sns 이벤트" class="img" style="width:50%"></a>'+
		'				                  <em class="emph">#머니허브 #머니허브sns이벤트</em>'+
		'				                  <div class="tit-area">'+
		'				                    <strong class="tit"><a href="" target="_blank">머니허브 sns 이벤트</a></strong>'+
		'				                  </div>'+
		'				                <span class="datetime">'+
		'				                  <time datetime="2019-12-30">2019.12.30</time>'+
		'				                  ~ <time datetime="2020-03-31">2020.03.31</time>'+
		'				                </span>'+
		'				              </li><br/><br/>'+
		'				              <li class="item1" style="margin: 0 0 0 210px">'+
		'				                  <a href="" class="linkthumb" target="_blank">'+
		'									<img src="'+x+'/event2.jpg/" alt="머니허브 첫 송금 시 1만원 페이백" class="img" style="width:50%"></a>'+
		'				                  <em class="emph">#머니허브 #머니허브페이백 #머니허브송금</em>'+
		'				                  <div class="tit-area">'+
		'				                    <strong class="tit"><a href="" target="_blank">머니허브 첫 송금 시 1만원 페이백</a></strong>'+
		'				                  </div>'+
		'				                <span class="datetime">'+
		'				                  <time datetime="2019-12-30">2019.12.30</time>'+
		'				                  ~ <time datetime="2020-03-31">2020.03.31</time>'+
		'				                </span><br/><br/>'+
		'				              </li>'+
		'				              <li class="item1" style="margin: 0 0 0 210px">'+
		'				                  <a href="" class="linkthumb" target="_blank">'+
		'									<img src="'+x+'/event3.jpg/" alt="머니허브 회원가입 시 별다방 커피 증정 이벤트" class="img" style="width:50%"></a>'+
		'				                  <em class="emph">#머니허브 #머니허브회원가입 #머니허브커피</em>'+
		'				                  <div class="tit-area">'+
		'				                    <strong class="tit"><a href="" target="_blank">머니허브 회원가입 시 별다방 커피 증정 이벤트</a></strong>'+
		'				                  </div>'+
		'				                <span class="datetime">'+
		'				                  <time datetime="2019-12-30">2019.12.30</time>'+
		'				                  ~ <time datetime="2020-03-31">2020.03.31</time>'+
		'				                </span><br/><br/>'+
		'				              </li>'+
		'				          </ul>'+
		'				      </div>'+
		'				    </div>'+
		'				  </div>'+
		'				</main>'+
		'				</div>'

	}
}
var function_vue = function_vue || {}
function_vue = {
		exchangeFunction : ()=>{
			return 	`<div class="themoin-remit-component" style="padding: 30px 0 40px 0;border-top-width: 0px;">
						<div id="moin-event-amount" class="moin-event-amount"><br>
						<h1 style="padding-bottom: 0px;">지금 바로 머니허브 환전을 이용해보세요</span>
							<p class="color-deepgrey"></p>
						</div>
				<div id="chart2" style="display: none;"><canvas id="canvas" style="width:200px; height:50px; margin-bottom: 10px"></canvas></div>
					<div class="check_font" id="exchange_check" ></div>
						<div class="moin-amount">
							<div id="remit_box" class="form-calculator main">
								<div class="amount-row">
									<div class="">
										<p>환전 금액</p>
										<input class="send-amount" id="exchange_amount"  type="text" tabindex="0" placeholder="0.00">
									</div>
									<div class="unit-select disabled" tabindex="0" >
										<p>대한민국</p>
										<h3>KRW</h3>
									</div>
								</div>
								<div class="amount-row">
									<div class="">
										<p>예상 비용</p>
										<input class="receive-amount" id="expect" type="text" tabindex="0" placeholder="0.00" readonly="">
									</div>
									<div class="unit-select receive" tabindex="0">
										<p>미국</p>
										<h3>USD</h3>
									</div>
								</div>
								<button id="exchangebutton" class="index-send-btn moin-body">환전하기</button>
							</div>
						</div>
					</div>`
		},
		exch_cntcd_popup : ()=>{
			return `<div class="moin-popup">
						<div class="themoin-unit-select-popup" tabindex="-1">
							<div class="unit-content">
								<a class="moin-close">
									<img src="https://img.themoin.com/public/img/btn-close.png" srcset="https://img.themoin.com/public/img/btn-close.png 1x,
									          https://img.themoin.com/public/img/btn-close@2x.png 2x,
									          https://img.themoin.com/public/img/btn-close@3x.png 3x">
				      			</a>
				      			<h3>송금 국가 선택</h3>
				      			<div id="popup_box">
				      				<form onsubmit="return false">
				      					<input type="text" placeholder="송금국가를 선택해주세요.">
				      					<button>입력</button>
				      				</form>
				      				<ul>
				      					
				      				</ul>
				      			</div>
				      		</div>
				      	</div>
					</div>`
		}
}
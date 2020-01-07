var remitpopup = remitpopup || {}
remitpopup = {
	coupon_popup : ()=>{
		return `<div id="popup-root">
					<div class="moin-popup">
						<div class="coupon-popup">
							<div class="new-content">
								<a class="moin-close"><img src="https://img.themoin.com/public/img/btn-close.png"></a>
								<h1>쿠폰 코드 입력</h1><br>
									<div>
										<div class="moin-input">
											<input class="fs-block" placeholder="쿠폰 코드를 입력해주세요." type="text" tabindex="0" value="">
										</div>
										<p class="moin-error"></p>
									</div><br>
								<a class="submit">확인</a>
							</div>
						</div>
					</div>
				</div>`
	}
}
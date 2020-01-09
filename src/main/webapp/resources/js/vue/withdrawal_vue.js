var withdrawal_vue = withdrawal_vue || {}
withdrawal_vue ={
	withdrawal : ()=>{
		alert('withdrawal_vue_js')
		return '<div class="themoin-mypage-password">'+
		'        <div class="content">'+
		'            <h1>비밀번호 변경 안내</h1>'+
		'            <p>다른 사이트에서 사용한 적이 없는 비밀번호나 이전에 사용한 적이 없는 비밀번호를 입력해주세요.<br>생일이나 전화번호, 연속된 숫자 등의 알기 쉬운 비밀번호도 피해주세요.</p>'+
		'            <form action="/a/v1/member/update" method="post">'+
		'                <div class="form-row">'+
		'                    <div class="password">'+
		'                        <div class="moin-input">'+
		'                            <label style="color: rgb(116, 127, 155);">현재 비밀번호</label>'+
		'                            <input class="fs-block" placeholder="현재 비밀번호를 입력해주세요." type="password" tabindex="0" value="">'+
		'                        </div>'+
		'                        <p class="moin-error"></p>'+
		'                    </div>'+
		'                </div>'+
		'                <div class="form-row">'+
		'                    <div class="password">'+
		'                        <div class="moin-input">'+
		'                            <label style="color: rgb(116, 127, 155);">새 비밀번호</label>'+
		'                            <input class="fs-block" placeholder="영문 숫자 조합 8~20자" type="password" tabindex="0" value="">'+
		'                        </div>'+
		'                        <p class="moin-error"></p>'+
		'                    </div>'+
		'                </div>'+
		'                <div class="form-row">'+
		'                    <div class="repassword">'+
		'                        <div class="moin-input">'+
		'                            <label style="color: rgb(116, 127, 155);">새 비밀번호 확인</label>'+
		'                            <input class="fs-block" placeholder="위 비밀번호와 동일하게 입력해주세요." type="password" tabindex="0" value="">'+
		'                        </div>'+
		'                        <p class="moin-error"></p>'+
		'                    </div>'+
		'                </div>'+
		'                <div class="form-row submit-row">'+
		'                    <div class="submit">'+
		'                        <button class="account-send-btn" type="submit" tabindex="0">확인</button>'+
		'                    </div>'+
		'                </div>'+
		'            </form>'+
		'        </div>'+
		'    </div>'
	}
}
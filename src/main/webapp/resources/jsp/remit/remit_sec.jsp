<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<div class="themoin-remit-step-form">
		<div class="header-progress">
			<div class="step-item current">
				<p>보내는 분 정보</p>
				<div>
					<div></div>
				</div>
			</div>
			<div class="step-line">
				<div></div>
			</div>
			<div class="step-item">
				<p>받는 분 정보</p>
				<div>
					<div></div>
				</div>
			</div>
			<div class="step-line">
				<div></div>
			</div>
			<div class="step-item">
				<p>정보 확인</p>
				<div>
					<div></div>
				</div>
			</div>
		</div>
		<h2>보내는 분</h2>
		<div class="themoin-section isOpen">
			<h2 class="section-title">보내는 분의 정보를 입력해 주세요.</h2>
			<p class="section-description">기입한 연락처로 송금 관련 문자가 발송됩니다. 중요한 안내를
				받지 못하는 일이 없도록 정확히 입력해주세요.</p>
			<button class="toggle open"></button>
			<div class="themoin-profile-section">
				<form action="/a/v1/member/update" method="post">
					<div class="form-row col-2">
						<div class="firstname">
							<div class="moin-input">
								<label style="color: rgb(116, 127, 155);">이름 (First
									name)</label> <input class="fs-block" placeholder="Gildong" type="text"
									tabindex="0" value="213" readonly="">
							</div>
							<p class="moin-error"></p>
						</div>
						<div class="lastname">
							<div class="moin-input">
								<label style="color: rgb(116, 127, 155);">성 (Last name)</label>
								<input class="fs-block" placeholder="Hong" type="text"
									tabindex="0" value="edqwe" readonly="">
							</div>
							<p class="moin-error"></p>
						</div>
					</div>
					<div class="form-row">
						<div class="moin-dropdown country">
							<label>국가</label> <a id="update-country" class="dropdown-toggle"
								data-toggle="dropdown" role="button" aria-expanded="false">
								<span class="moin-dropdown-text">대한민국 (South Korea)</span> <img
								class="pull-right"
								src="https://img.themoin.com/public/img/ic-dropdown-p.png">
							</a>
							<ul class="dropdown-menu" role="menu">
								<li><a>대한민국 (South Korea)</a></li>
							</ul>
						</div>
					</div>
					<div class="form-row col-2">
						<div class="zip">
							<div class="moin-input">
								<label style="color: rgb(116, 127, 155);">우편번호</label> <input
									class="fs-block" placeholder="12345" type="text" tabindex="0"
									value="28787">
							</div>
							<p class="moin-error"></p>
						</div>
						<div class="postcode">
							<button class="btn-zipcode" tabindex="0" type="button">우편번호
								검색</button>
						</div>
					</div>
					<div class="form-row">
						<div class="address">
							<div class="moin-input">
								<label style="color: rgb(116, 127, 155);">주소</label> <input
									class="fs-block"
									placeholder="417, Yeongdong-daero, Gangnam-gu, Seoul, Korea"
									type="text" tabindex="0"
									value="1202-2, 1sunhwan-ro, Sangdang-gu, Cheongju-si, Chungcheongbuk-do, Korea">
							</div>
							<p class="moin-error"></p>
						</div>
					</div>
					<div class="form-row">
						<div class="subaddress">
							<div class="moin-input">
								<label style="color: rgb(116, 127, 155);">상세주소</label> <input
									class="fs-block" placeholder="B2 Floor" type="text"
									tabindex="0" value="2">
							</div>
							<p class="moin-error"></p>
						</div>
					</div>
					<div class="form-row col-2">
						<div class="phone1">
							<div class="moin-dropdown">
								<label>국가 번호 (Country Code)</label> <a id="phone1"
									class="dropdown-toggle">+82 (South Korea) <img
									class="pull-right"
									src="https://img.themoin.com/public/img/ic-dropdown-p.png">
								</a>
							</div>
						</div>
						<div class="themoin-composite-input  phone2">
							<div class="extra-controls">
								<button>번호변경</button>
							</div>
							<div class="moin-input">
								<label style="color: rgb(116, 127, 155);">휴대전화 번호
									(Mobile)</label> <input class="fs-block" placeholder="01012345678"
									type="text" tabindex="0" maxlength="11" value="123456789">
							</div>
							<p class="moin-error"></p>
						</div>
					</div>
					<div class="form-row"></div>
				</form>
				<div class="daum-container hidden">
					<div class="daum-layer">
						<img id="btnCloseLayer"
							src="https://i1.daumcdn.net/localimg/localimages/07/postcode/320/close.png"
							alt="닫기 버튼"
							style="cursor: pointer; position: absolute; z-index: 1;">
					</div>
				</div>
			</div>
		</div>
		<div class="controls">
			<button class="prev">이전</button>
			<button id="sec_remit_btn" class="next">다음</button>
		</div>
		<div style="height: 80px;"></div>
	</div>
	<div style="display: none"></div>
</body>
</html>
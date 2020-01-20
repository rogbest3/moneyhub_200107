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
						<div class="step-item active">
							<p>보내는 분 정보</p>
							<div>
								<div></div>
							</div>
						</div>
						<div class="step-line active">
							<div></div>
						</div>
						<div class="step-item current">
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
					<h2>받는 분 (Recipient)</h2>
					<div class="themoin-section isOpen">
						<h2 class="section-title">받는 분의 정보를 입력해주세요.</h2>
						<button class="toggle open"></button>
						<form class="themoin-recipient-field-section">
							<div class="form-row col-2">
								<div>
									<div class="moin-input">
										<label style="color: rgb(116, 127, 155);">받는 분 이름 (First Name)</label>
										<input class="fs-block" placeholder="이름 (First Name)" type="text" tabindex="0" value="">
									</div>
									<p class="moin-error"></p>
								</div>
								<div>
									<div class="moin-input">
										<label style="color: rgb(116, 127, 155);">받는 분 성 (Last Name)</label>
										<input class="fs-block" placeholder="성 (Last Name)" type="text" tabindex="0" value="">
									</div>
									<p class="moin-error"></p>
								</div>
							</div>
							<div class="form-row">
								<div>
									<img src="https://img.themoin.com/public/img/search-new.svg" class="btn-search" type="button">
									<div class="moin-input">
										<label style="color: rgb(116, 127, 155);">은행 (Bank)</label>
										<input class="fs-block" placeholder="은행명을 검색해 주세요." type="text" tabindex="0" readonly="" value="">
									</div>
									<p class="moin-error"></p>
								</div>
							</div>
							<div class="form-row">
								<div>
									<div class="moin-input">
										<label style="color: rgb(116, 127, 155);">계좌 번호 (Account number)</label>
										<input class="fs-block" placeholder="1234567123456712" type="text" tabindex="0" value="">
									</div>
									<p class="moin-error"></p>
								</div>
							</div>
							<div class="form-row col-2">
								<div class="phone1">
									<div class="moin-dropdown">
										<label>국가 번호 (Country Code)</label>
										<a class="dropdown-toggle">+65 (싱가포르)
											<img class="pull-right" src="https://img.themoin.com/public/img/ic-dropdown-p.png">
										</a>
										<ul class="dropdown-menu">
											<li>
												<a>+65 (싱가포르)</a>
											</li>
										</ul>
									</div>
								</div>
								<div class="phone2">
									<div class="moin-input">
										<label style="color: rgb(116, 127, 155);">휴대전화 번호 (Mobile)</label>
										<input class="fs-block" placeholder="08012345678" type="text" tabindex="0" maxlength="11" value="">
									</div>
									<p class="moin-error"></p>
								</div>
							</div>
							<div>
								<br>
								<p style="text-align: center;">송금 예상시간 : 한국은행 영업시간 기준으로 약 2일 이내에 송금 완료.<br>
								(한국 시각 10:00 - 19:00 기준, 주말 및 공휴일 제외)</p>
							</div>
						</form>
					</div>
					<div class="controls">
						<button class="prev">이전</button>
						<button id="third_remit_btn" class="next">다음</button>
					</div>
					<div style="height: 80px;"></div>
				</div>
				<div style="display:none"></div>
			</div>
</body>
</html>
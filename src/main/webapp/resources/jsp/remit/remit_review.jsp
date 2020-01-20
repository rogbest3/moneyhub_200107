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
			<div class="step-item active">
				<p>받는 분 정보</p>
				<div>
					<div></div>
				</div>
			</div>
			<div class="step-line active">
				<div></div>
			</div>
			<div class="step-item current">
				<p>정보 확인</p>
				<div>
					<div></div>
				</div>
			</div>
		</div>
		<h2>입력하신 정보가 맞나요?</h2>
		<div class="themoin-section borderless isOpen">
			<h2 class="section-title"></h2>
			<div class="themoin-review-section">
				<div style="text-align: center;">
					<p>
						입력한 정보를 한 번 더 확인하시고 <br class="mobile">송금 신청을 눌러주세요.
					</p>
				</div>
				<div class="review-amount" style="margin-top: 25px;">
					<p>보내는 금액</p>
					<div>
						<div class="amount">
							<p>
								5,500,000 <span class="unit">KRW</span>
							</p>
							<p>총 수수료 : 3,000 KRW</p>
						</div>
						<img src="https://img.themoin.com/public/img/ic-next-p.png"
							class="user-sendlist-ic">
						<div class="amount receive">
							<p>
								4,731.41 <span class="unit">USD</span>
							</p>
							<p>적용 환율 : 1 USD = 1161.81 KRW</p>
						</div>
					</div>
				</div>
				<div class="review-receiver">
					<div class="review-icon">
						<img src="https://img.themoin.com/public/img/img-recipient-2.svg">
						<p>받는 사람</p>
					</div>
					<table>
						<tbody>
							<tr>
								<td style="width: 100px;">국가</td>
								<td class="color-grey-1">미국 (USA)</td>
							</tr>
							<tr>
								<td>이름</td>
								<td class="color-grey-1 name fs-block"><span lang="en">SADQW
										FSADF WER</span></td>
							</tr>
							<tr>
								<td>송금대상</td>
								<td class="color-grey-1 fs-block">개인</td>
							</tr>
							<tr>
								<td>계좌종류</td>
								<td class="color-grey-1 fs-block">SAVING</td>
							</tr>
							<tr>
								<td>라우팅번호</td>
								<td class="color-grey-1 fs-block">122233345</td>
							</tr>
							<tr>
								<td>계좌번호</td>
								<td class="color-grey-1 fs-block">213214</td>
							</tr>
							<tr>
								<td>전화번호</td>
								<td class="color-grey-1 fs-block">+1 (미국) 1251235615</td>
							</tr>
							<tr>
								<td>거주지역</td>
								<td class="color-grey-1 fs-block">a, DE</td>
							</tr>
						</tbody>
					</table>
					<a>수정하기</a>
				</div>
				<br>
			</div>
		</div>
		<div class="themoin-section borderless isOpen">
			<h2 class="section-title">송금 목적을 알려주세요.</h2>
			<div class="themoin-survey-section">
				<div class="survey-input">
					<p class="select-label">송금 목적 :</p>
					<select>
						<option value="보내는 분 기준으로 선택해주세요">보내는 분 기준으로 선택해주세요
							(Select)</option>
						<option value="학비">학비 (School tuition)</option>
						<option value="생활비">생활비 (Living expense)</option>
						<option value="개인 구매 대금">개인 구매 대금 (Personal purchase
							payment)</option>
						<option value="사업 대금">사업 대금 (Business payment)</option>
						<option value="기타 - 직접입력">기타 - 직접입력 (Others - Please
							specify)</option>
					</select>
				</div>
				<div class="survey-input">
					<p class="select-label">자금 출처 :</p>
					<select>
						<option value="보내는 분 기준으로 선택해주세요">보내는 분 기준으로 선택해주세요
							(Select)</option>
						<option value="근로소득">근로소득 (Earned income)</option>
						<option value="사업소득">사업소득 (Business income)</option>
						<option value="부동산 임대 소득">부동산 임대 소득 (Real estate rental
							income)</option>
						<option value="연금소득">연금소득 (Annuity income)</option>
						<option value="기타 - 직접입력">기타 - 직접입력 (Others - Please
							specify)</option>
					</select>
				</div>
				<div class="survey-input">
					<p class="select-label">직업 정보 :</p>
					<select>
						<option value="보내는 분 기준으로 선택해주세요">보내는 분 기준으로 선택해주세요
							(Select)</option>
						<option value="학생">학생 (Student)</option>
						<option value="직장인">직장인 (Office worker)</option>
						<option value="사업자">사업자 (Entrepreneur)</option>
						<option value="주부">주부 (Housewife)</option>
						<option value="기타 - 직접입력">기타 - 직접입력 (Others - Please
							specify)</option>
					</select>
				</div>
			</div>
		</div>
		<p class="warning-text">입금 후 취소가 불가능합니다. 신중하게 송금 신청해주세요!</p>
		<div class="submit-controls">
			<button id="complete_remit_btn">송금신청하기</button>
		</div>
		<div style="height: 80px;"></div>
	</div>
	<div style="display: none"></div>
</body>
</html>
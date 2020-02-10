<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<div class="steps" style="max-width: 1365px; text-align: center;">
		<div id="idx_exchg_btn" class="threesteps">
			<img src="/web/resources/img/main/exchange.png" style="width: 300px;">
			<h3>환전</h3>
		</div>
		<div id="idx_remit_btn" class="threesteps">
			<img src="/web/resources/img/main/remit.png" style="width: 300px">
			<h3>wu 해외송금</h3>
		</div>
		<div id="idx_testexchg_btn" class="threesteps">
			<img src="/web/resources/img/main/testexchange.png"
				style="width: 300px">
			<h3>모의 환전</h3>
		</div>
	</div>
	<div class="themoin-main-remititem">
		<div class="simple">
			<div class="unit-flag">
				<img src="https://img.themoin.com/public/img/circle-flag-us.svg">
			</div>
			<div class="simple-nametime">
				<h3 class="username">
					<span class="fs-block" lang="en" title="a a a">a a a</span>
				</h3>
				<p class="create-time">2020-02-09 05:32</p>
			</div>
			<div class="simple-spacer"></div>
			<div class="simple-amount">
				<div class="user-sendlistdetail-amount">
					<h3 class="user-sendlist-send">
						<span class="user-sendlist-send">5,500,000</span><span
							class="user-sendlist-sendunit">KRW</span>
					</h3>
					<img src="https://img.themoin.com/public/img/ic-next-p.png"
						class="user-sendlist-ic">
					<h3 class="user-sendlist-receive">
						<span class="user-sendlist-receive">4,587.13</span><span
							class="user-sendlist-receiveunit">USD</span>
					</h3>
				</div>
				<p>적용 환율 : 1 USD = 1198.35 KRW</p>
				<div class="send-due">
					<p>2020-02-09 06:32 까지 입금 해 주세요.</p>
				</div>
			</div>
			<div class="simple-spacer"></div>
			<div class="user-sendlist-status">
				<div class="user-sendlist-state">
					<div class="user-sendlist-state-text moin-body">입금 확인중</div>
				</div>
				<button type="button desktop" class="user-sendlist-btn">수정</button>
				<img src="https://img.themoin.com/public/img/btn-open-list-blue.svg">
			</div>
		</div>
		<div class="detail detail-hidden">
			<div class="user-sendlist-status">
				<div class="user-sendlist-state">
					<div class="user-sendlist-state-text moin-body">입금 확인중</div>
					<img
						src="https://img.themoin.com/public/img/btn-open-list-blue.svg">
				</div>
			</div>
			<div class="user-sendlistdetail">
				<div class="unit-flag-detail">
					<img src="https://img.themoin.com/public/img/circle-flag-us.svg">
				</div>
				<div class="user-sendlistdetail-info">
					<h3 class="color-deepblue user-sendlistdetail-name">
						<span lang="en">a a a</span>
					</h3>
					<div class="user-sendlistdetail-account">
						<div class="moin-body">
							<span class="fs-block">국가 : 미국 (USA)</span><span class="body-bar"></span><span
								class="fs-block">송금대상 : 개인</span><span class="body-bar"></span><span
								class="fs-block">계좌종류 : SAVING</span>
						</div>
						<div class="moin-body">
							<span class="fs-block">라우팅번호 : 111111111</span><span
								class="body-bar"></span><span class="fs-block">계좌번호 : 1</span>
						</div>
						<div class="moin-body">
							<span class="fs-block">전화번호 : 11</span><span class="body-bar"></span><span
								class="fs-block">거주지역 : a, DE</span>
						</div>
					</div>
					<div class="user-sendlistdetail-amount">
						<h3 class="user-sendlist-send">
							<span class="user-sendlist-send">5,500,000</span><span
								class="user-sendlist-sendunit">KRW</span>
						</h3>
						<img src="https://img.themoin.com/public/img/ic-next-p.png"
							class="user-sendlist-ic">
						<h3 class="user-sendlist-receive">
							<span class="user-sendlist-receive">4,587.13</span><span
								class="user-sendlist-receiveunit">USD</span>
						</h3>
					</div>
					<p>적용 환율 : 1 USD = 1198.35 KRW</p>
					<div class="send-due">
						<p>2020-02-09 06:32 까지 입금 해 주세요.</p>
					</div>
				</div>
				<ul>
					<li><span>국가</span><span class="">미국 (USA)</span></li>
					<li><span>송금대상</span><span class="">개인</span></li>
					<li><span>계좌종류</span><span class="">SAVING</span></li>
					<li><span>라우팅번호</span><span class="">111111111</span></li>
					<li><span>계좌번호</span><span class="fs-block">1</span></li>
					<li><span>전화번호</span><span class="fs-block">11</span></li>
					<li><span>거주지역</span><span class="fs-block">a, DE</span></li>
				</ul>
				<div class="user-sendlistdetail-link">
					<button type="button" class="user-sendlistdetail-btn">수정</button>
					<button type="button" class="user-sendlistdetail-btn cancel">송금
						취소</button>
				</div>
			</div>
		</div>
	</div>
</body>
</html>
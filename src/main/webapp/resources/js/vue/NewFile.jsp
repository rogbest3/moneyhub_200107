<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<div class="themoin-remit-component">
		<div id="moin-event-amount" class="moin-event-amount">
			<h1>
				지금 바로 머니허브 환전을 이용해보세요</span>
				<p class="color-deepgrey"></p>
		</div>
		<div class="moin-amount">
			<div id="remit_box" class="form-calculator main">
				<div class="amount-row">
					<div class="">
						<p>환전 금액</p>
						<input class="send-amount" id="exchange_amount" type="text"
							tabindex="0" placeholder="0.00">
					</div>
					<div class="unit-select disabled" tabindex="0">
						<p>대한민국</p>
						<h3>KRW</h3>
					</div>
				</div>
				<div class="amount-row">
					<div class="">
						<p>예상 비용</p>
						<input class="receive-amount" type="text" tabindex="0"
							placeholder="0.00" readonly="">
					</div>
					<div class="unit-select receive" tabindex="0">
						<p>미국</p>
						<h3>USD</h3>
					</div>
				</div>
				<button id="exchangebutton" class="index-send-btn moin-body">환전하기</button>
			</div>
		</div>
	</div>
	
</body>
</html>
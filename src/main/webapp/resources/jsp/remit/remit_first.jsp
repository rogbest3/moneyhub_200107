<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<div class="themoin-remit-extended-component">
		<h2 class="title-amount">보내는 금액을 입력해주세요.</h2>
		<div id="moin-event-amount" class="moin-event-amount"
			style="text-align: center;">
			<p class="color-deepgrey"></p>
		</div>
		<div class="form-calculator">
			<div class="amount-row">
				<div class="">
					<p>송금 금액</p>
					<input class="send-amount" type="text" tabindex="0"
						placeholder="0.00">
				</div>
				<div class="unit-select disabled" tabindex="0.00">
					<p>미화</p>
					<h3>USD</h3>
				</div>
			</div>
			<div class="description">
				<i class="empty"></i>
				<p>
					<span>16$</span> USD (수수료)
				</p>
				<div class="spacer"></div>
				<a tabindex="0">쿠폰 등록</a>
			</div>
			<div class="description">
				<i class="empty"></i>
				<p>
					<span>5,417,500</span>KRW (실제 환전 금액)
				</p>
			</div>
			<div class="description last">
				<i><img
					src="https://img.themoin.com/public/img/exchange-rate.svg"></i>
				<p>
					<span>100</span>JPY = <span>1060.08</span>KRW (모인 환율)
				</p>
				<div class="spacer"></div>
				<a tabindex="0">상세 보기</a>
			</div>
			<div class="amount-row">
				<div class="">
					<p>실제로 받는 금액 (직접입력 가능)</p>
					<input class="receive-amount" type="text" tabindex="0"
						value="511,046">
				</div>
				<div class="unit-select receive" tabindex="0">
					<p>일본</p>
					<h3>JPY</h3>
				</div>
			</div>
		</div>
		<button id="first_remit_btn" class="submit">송금하기</button>
	</div>
	<div style="display: none"></div>
</body>
<script type="text/javascript">

</script>
</html>
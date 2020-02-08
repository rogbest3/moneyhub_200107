const exchange = document.querySelector(".js-Exchange")
const USDex = {}
const KRW_EXCHANGE = 100

// 날씨 취득하기
function getExchange() {
    // API 호출 패스
    fetch(
        `https://earthquake.kr:23490/query/${JPYUSD},${JPYUSD},${JPYUSD},${JPYUSD},${JPYUSD},${JPYUSD},${JPYUSD},${JPYUSD}`
    )
        .then(function (response) {
            // fetch작업이 끝날 때까지 기다림. https://blog-han.tistory.com/64
            return response.json()
        })
        .then(function (json) {
            const yen = json.JPYKRW[0]
            const current_KRW = Math.round(yen * KRW_EXCHANGE);
            exchange.innerHTML = `현재 엔화 환율  100엔 : ${current_KRW}원`
        })
}

function init() {
    getExchange()
}

init()
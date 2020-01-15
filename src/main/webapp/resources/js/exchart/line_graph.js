
$(function() {
	let lineChart = null;
	let ctx = document.getElementById("canvas").getContext("2d");

	let lineChartData = {
		labels : [],	// 일자////
		datasets : [		
			{
				label: "Exchange Rate dataset",
				fillColor : "rgba(151,187,205,0.2)",
				strokeColor : "rgba(151,187,205,1)",
				pointColor : "rgba(151,187,205,1)",
				pointStrokeColor : "#fff",
				pointHighlightFill : "#fff",
				pointHighlightStroke : "rgba(151,187,205,1)",
				data : []	// 환율
			}
		]
	}
/*	function clock_excute(){
//		let clockTarger = document.getElementById("clock")
		let date = new Date();
		let year = date.getFullYear()
		let month = date.getMonth()
		let clockDate = date.getDate()
		let day = date.getDay()
		let hours = date.getHours()
		let minutes = date.getMinutes()
		let seconds = date.getSeconds()
		$('#clock').text(`실시간 모인 환율 - ${year}년 ${month+1}월 ${clockDate}일` +
				` ${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes }` : minutes }:${seconds < 10 ? `0${seconds }` : seconds }`)
	}

	setInterval(clock_excute, 1000)*/
//	if($('#clock').text() == )
/*	if(  new Date().getMinutes() == 55 ){
		alert(new Date().getMinutes())
	}*/
	chart_update()
	
	function chart_update(){
//		alert('chart_update')
		let cntcd = 'USD'
			$.getJSON( '/web/exrate/search/' + cntcd, d=>{	
				$.each(d.exlist.reverse(), (i, j)=>{
//					lineChartData.datasets[0].data[i] = j.exrate 
					lineChartData.labels.push(j.bdate.substr(-2))
					lineChartData.datasets[0].data.push(parseDouble(j.exrate))
				})
				
				$('#cntcd_exrate')
				.text(`1 ${cntcd} = ${lineChartData.datasets[0].data[9]} KRW`)
				
				lineChart = new Chart(ctx).Line(lineChartData, {
					///Boolean - Whether grid lines are shown across the chart
					scaleShowGridLines : false,
					//String - Colour of the grid lines
					scaleGridLineColor : "rgba(0,0,0,0.05)",
					//Number - Width of the grid lines
					scaleGridLineWidth : 1,
					//Boolean - Whether the line is curved between points
					bezierCurve : false,
					//Number - Tension of the bezier curve between points
					bezierCurveTension : 0.4,
					//Boolean - Whether to show a dot for each point
					pointDot : true,
					//Number - Radius of each point dot in pixels
					pointDotRadius : 5,
					//Number - Pixel width of point dot stroke
					pointDotStrokeWidth : 1,
					//Number - amount extra to add to the radius to cater for hit detection outside the drawn point
					pointHitDetectionRadius : 20,
					//Boolean - Whether to show a stroke for datasets
					datasetStroke : true,
					//Number - Pixel width of dataset stroke
					datasetStrokeWidth : 2,
					//Boolean - Whether to fill the dataset with a colour
					datasetFill : false,
					onAnimationProgress: function() {
						console.log("onAnimationProgress");
					},
					onAnimationComplete: function() {
						console.log("onAnimationComplete");
					}
				})
			})
	}
	
})

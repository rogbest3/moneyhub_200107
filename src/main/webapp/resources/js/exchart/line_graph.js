//		window.onload = function() {//
$(document).ready(function(){
	let config = {
		type: 'line',
		data: {
			labels: [],
			datasets: [{
				label: '머니허브 환율',
				backgroundColor: '#2DCCD6',		//window.chartColors.blue,
				borderColor: '#2DCCD6',
				lineTension : 0,
				data: [],
				fill: false	
			}]
		},
		options: {
			responsive: true,
			legend : {
				display : false
			},
			title: {
				display: true,
				text: '',
				fontSize : 18
			},
			tooltips: {
				displayColors : false,
				backgroundColor : '#2DCCD6',
				titleFontColor : '#fff',
				titleAlign : 'center',
				titleFontStyle : 'bold',
				callbacks : {
					title : function(tooltipItem, data){
						return `머니허브 환율`
					},
					label : function(tooltipItem, data){
						return config.data.datasets[0].data[tooltipItem['index']]
					}
				},
				intersect: false
			},
			hover: {
				mode: 'nearest',
				intersect: true
			},
			scales: {
				xAxes: [{
					display: true,
					gridLines : {
						display : false
					},
					scaleLabel: {
						display: false,
						labelString: 'Month'
					}
				}],
				yAxes: [{
					display: false,
					gridLines : {
						display : false
					},
					scaleLabel: {
						display: true,
						labelString: 'Value'
					}
				}]
			}
		}
	};
//	alert('그래프')
	let ctx = document.getElementById('canvas').getContext('2d');
	let getProfitsChart = $.profitsChart()

	if( $.chartFlag() === 'profitsChart'){
//		let ctx2 = document.getElementById('pofitsCanvas').getContext('2d');
		
		alert('profisChart length - ' + getProfitsChart.length)
		config.data.labels = []
		config.data.datasets[0].data = []
		
		$.each(getProfitsChart, (i, j)=>{
			config.data.labels[i] = j.bdate.substr(-5).replace('-', '/')
			config.data.datasets[0].data[i] = parseFloat(j.profits)
		})
		console.log(config.data.labels)
		console.log(config.data.datasets[0].data)
		config.options.title.text = `날짜별 수익금 차트`
		
		window.myLine = new Chart(ctx, config);
		
	}else{
		let cntcd = $('.form-calculator .amount-row .receive h3').text()
		$.getJSON( '/web/exrate/search/cntcd/' + 'USD', d=>{	
			$.each(d.exlist.reverse(), (i, j)=>{
				config.data.labels[i] = j.bdate.substr(-5).replace('-', ' / ')
				config.data.datasets[0].data[i] = parseFloat(j.exrate)
			})
			config.options.title.text = `1 USD = ${config.data.datasets[0].data[config.data.datasets[0].data.length -1]} KRW`
			window.myLine = new Chart(ctx, config);
		})
	}
	
	
})
		

/*		document.getElementById('randomizeData').addEventListener('click', function() {
			config.data.datasets.forEach(function(dataset) {
				dataset.data = dataset.data.map(function() {
					return randomScalingFactor();
				});

			});

			window.myLine.update();
		});

		var colorNames = Object.keys(window.chartColors);
		document.getElementById('addDataset').addEventListener('click', function() {
			var colorName = colorNames[config.data.datasets.length % colorNames.length];
			var newColor = window.chartColors[colorName];
			var newDataset = {
				label: 'Dataset ' + config.data.datasets.length,
				backgroundColor: newColor,
				borderColor: newColor,
				data: [],
				fill: false
			};

			for (var index = 0; index < config.data.labels.length; ++index) {
				newDataset.data.push(randomScalingFactor());
			}

			config.data.datasets.push(newDataset);
			window.myLine.update();
		});

		document.getElementById('addData').addEventListener('click', function() {
			if (config.data.datasets.length > 0) {
				var month = MONTHS[config.data.labels.length % MONTHS.length];
				config.data.labels.push(month);

				config.data.datasets.forEach(function(dataset) {
					dataset.data.push(randomScalingFactor());
				});

				window.myLine.update();
			}
		});

		document.getElementById('removeDataset').addEventListener('click', function() {
			config.data.datasets.splice(0, 1);
			window.myLine.update();
		});

		document.getElementById('removeData').addEventListener('click', function() {
			config.data.labels.splice(-1, 1); // remove the label first

			config.data.datasets.forEach(function(dataset) {
				dataset.data.pop();
			});

			window.myLine.update();
		});*/
//		window.onload = function() {//
$(document).ready(function(){
	let value
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
						return common.comma_create(config.data.datasets[0].data[tooltipItem['index']])
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
	let config1 = {
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
			}],
			yAxisID: 'y-axis-1'
		},
		options: {
			responsive: true,
			legend : {
				display : false
			},
			title: {
				display: true,
				text: '',
				fontSize : 20
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
						return common.comma_create(config1.data.datasets[0].data[tooltipItem['index']])
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
					type: 'linear',
					display: true,
					position: 'left',
					id: 'y-axis-1',
					gridLines : {
						drawOnChartArea: false
					},
					ticks : {
						stepSize : 500000,
						callback: function(value, index, values) {
					        if(parseInt(value) > 999){
					            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
					        } else if (parseInt(value) < -999) {
					            return Math.abs(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
					        } else {
					            return value;
					        }
					    }
					}
					/*scaleLabel: {
						display: true,
						labelString: 'Value'
					}*/
				}]
			}
		}
	};
	let ctx = document.getElementById('canvas').getContext('2d');
	let getProfitsChart = $.profitsChart()
	
	if( $.chartFlag() === 'profitsChart'){
		config1.data.labels = []
		config1.data.datasets[0].data = []
		alert('getProfitsChart[0].bdate : ' + getProfitsChart[0].bdate + ', 수익금 차트 : ' + JSON.stringify(getProfitsChart) )
		
		$.each(getProfitsChart, (i, j)=>{
			config1.data.labels[i] = j.bdate.substr(-5).replace('-', ' / ')
			config1.data.datasets[0].data[i] = parseFloat(j.profits)
		})
		config1.options.title.text = `날짜별 수익금 차트`
		
		window.myLine = new Chart(ctx, config1);
		
	}else if($.chartFlag() === 'historyChart'){	
		let usdData = [], eurData = [], cnyData = [], jpyData = [], audData = [], ctx, tempConfig = {}
		$.getJSON( `/web/exrate/exchangetest/${$.exrateSess().bdate}`, d=>{
			let l = d.usdRate.length
			config.data.labels = []
			for(let i=0; i<l; i++){
				config.data.labels[i] = d.usdRate[i].bdate.substr(-5).replace('-', ' / ')
				usdData[i] = parseFloat(d.usdRate[i].exrate)
				eurData[i] = parseFloat(d.eurRate[i].exrate)
				cnyData[i] = parseFloat(d.cnyRate[i].exrate)
				jpyData[i] = parseFloat(d.jpyRate[i].exrate)
				audData[i] = parseFloat(d.audRate[i].exrate)
			}
			let lineData = [{ ctxId : 'canvas2', data : usdData, color : '#2DCCD6', title : 'USD(미국) 환율 그래프', cf : config2 },
							{ ctxId : 'canvas3', data : eurData, color : '#36a2eb', title : 'EUR(유럽) 환율 그래프', cf : config3  },
                            { ctxId : 'canvas4', data : audData, color : '#ffcd56', title : 'AUD(호주) 환율 그래프', cf : config4  },
                            { ctxId : 'canvas5', data : cnyData, color : '#ff6384', title : 'CNY(중국) 환율 그래프', cf : config5  },
                            { ctxId : 'canvas6', data : jpyData, color : '#9966ff', title : 'JPY(일본) 환율 그래프', cf : config6  }]
			$.each(lineData, (i, j)=>{
				let ctx = document.getElementById(j.ctxId).getContext('2d');
				tempConfig = j.cf
				tempConfig.options.tooltips.backgroundColor = j.color
				tempConfig.data.datasets[0].backgroundColor = j.color
				tempConfig.data.datasets[0].borderColor = j.color
				tempConfig.data.labels = config.data.labels
				tempConfig.data.datasets[0].data = j.data
				tempConfig.options.title.text = j.title
				window.myLine = new Chart(ctx, tempConfig);
			})
		})
	}else{
		let cntcd = $('.form-calculator .amount-row .receive h3').text()
		$.getJSON( '/web/exrate/search/cntcd/' + 'USD', d=>{	
			$.each(d.exlist.reverse(), (i, j)=>{
				config.data.labels[i] = j.bdate.substr(-5).replace('-', ' / ')
				config.data.datasets[0].data[i] = parseFloat(j.exrate)
			})
			config.options.title.text = `1 USD = ${common.comma_create(config.data.datasets[0].data[config.data.datasets[0].data.length -1])} KRW`
			window.myLine = new Chart(ctx, config);
		})
	}
	
	
	
	let config2 = {
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
						return common.comma_create(config2.data.datasets[0].data[tooltipItem['index']])
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
	let config3 = {
		type: 'line',
		data: {
			labels: [],
			datasets: [{
				label: '머니허브 환율',
				backgroundColor: '#36a2eb',		//window.chartColors.blue,
				borderColor: '#36a2eb',
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
				backgroundColor : '#36a2eb',
				titleFontColor : '#fff',
				titleAlign : 'center',
				titleFontStyle : 'bold',
				callbacks : {
					title : function(tooltipItem, data){
						return `머니허브 환율`
					},
					label : function(tooltipItem, data){
						return common.comma_create(config3.data.datasets[0].data[tooltipItem['index']])
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
	let config4 = {
		type: 'line',
		data: {
			labels: [],
			datasets: [{
				label: '머니허브 환율',
				backgroundColor: '#36a2eb',		//window.chartColors.blue,
				borderColor: '#36a2eb',
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
				backgroundColor : '#36a2eb',
				titleFontColor : '#fff',
				titleAlign : 'center',
				titleFontStyle : 'bold',
				callbacks : {
					title : function(tooltipItem, data){
						return `머니허브 환율`
					},
					label : function(tooltipItem, data){
						return common.comma_create(config4.data.datasets[0].data[tooltipItem['index']])
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
	let config5 = {
		type: 'line',
		data: {
			labels: [],
			datasets: [{
				label: '머니허브 환율',
				backgroundColor: '#36a2eb',		//window.chartColors.blue,
				borderColor: '#36a2eb',
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
				backgroundColor : '#36a2eb',
				titleFontColor : '#fff',
				titleAlign : 'center',
				titleFontStyle : 'bold',
				callbacks : {
					title : function(tooltipItem, data){
						return `머니허브 환율`
					},
					label : function(tooltipItem, data){
						return common.comma_create(config5.data.datasets[0].data[tooltipItem['index']])
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
	let config6 = {
		type: 'line',
		data: {
			labels: [],
			datasets: [{
				label: '머니허브 환율',
				backgroundColor: '#36a2eb',		//window.chartColors.blue,
				borderColor: '#36a2eb',
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
				backgroundColor : '#36a2eb',
				titleFontColor : '#fff',
				titleAlign : 'center',
				titleFontStyle : 'bold',
				callbacks : {
					title : function(tooltipItem, data){
						return `머니허브 환율`
					},
					label : function(tooltipItem, data){
						return common.comma_create(config6.data.datasets[0].data[tooltipItem['index']])
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
})
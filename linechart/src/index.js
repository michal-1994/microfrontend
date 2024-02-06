import * as echarts from 'echarts';

var myChart = echarts.init(document.getElementById('linechartId'));

myChart.setOption({
	title: {
		text: 'ECharts Getting Started Example',
	},
	tooltip: {},
	legend: {
		data: ['sales'],
	},
	xAxis: {
		data: ['Shirts', 'Cardigans', 'Chiffons', 'Pants', 'Heels', 'Socks'],
	},
	yAxis: {},
	series: [
		{
			name: 'sales',
			type: 'line',
			data: [5, 20, 36, 10, 10, 20],
		},
	],
});

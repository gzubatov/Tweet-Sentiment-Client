import React from 'react';

import { Bar } from 'react-chartjs-2';

const BarChart = ({ tweets }) => {
	let dataSet = [ 0, 0, 0 ];
	tweets.forEach((tweet) => {
		if (tweet.score.score > 0) {
			dataSet[0] += 1;
		}
		else if (tweet.score.score < 0) {
			dataSet[1] += 1;
		}
		else {
			dataSet[2] += 1;
		}
	});

	const data = {
		labels   : [ 'Positive', 'Negative', 'Inconclusive' ],
		datasets : [
			{
				backgroundColor : [
					'rgba(75, 192, 192, 0.2)',
					'rgba(255, 99, 132, 0.2)',
					'rgba(100,100,100,.2)'
				],
				borderColor     : [
					'rgba(75, 192, 192, 1)',
					'rgba(255, 99, 132, 1)',
					'rgba(100,100,100,1)'
				],
				borderWidth     : 1,
				data            : dataSet
			}
		]
	};

	const options = {
		legend              : {
			display : false
		},
		maintainAspectRatio : false,
		scales              : {
			yAxes : [
				{
					ticks : {
						beginAtZero : true,
						stepSize    : 1
					}
				}
			]
		}
	};

	return (
		<div>
			<h2>Overall Sentiment of Search Results</h2>
			<Bar data={data} width={100} height={50} options={options} />
		</div>
	);
};

export default BarChart;

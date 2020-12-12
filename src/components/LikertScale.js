// Component to display a horizontal bar chart to resemble a Likert Scale
// Props:
//	number - a sentiment score, the number on the likert scale

import React from 'react';

import { HorizontalBar } from 'react-chartjs-2';
import './likert.css';

const LikertScale = ({ number }) => {
	const data = {
		//labels   : [ 'Sentiment Score' ],
		datasets : [
			{
				label           : 'Sentiment Score (negative to positive)',
				data            : [ number, 5, -5 ],
				backgroundColor : [
					number < 0
						? 'rgba(255, 99, 132, 0.2)'
						: 'rgba(75, 192, 192, 0.2)'
				],
				borderColor     : [
					number < 0
						? 'rgba(255, 99, 132, 1)'
						: 'rgba(75, 192, 192, 1)'
				],
				borderWidth     : 1
			}
		]
	};

	const options = {
		scales : {
			yAxes : [
				{
					ticks : {
						beginAtZero : true,
						max         : -5,
						min         : 5,
						stepSize    : 1
					}
				}
			]
		}
	};

	return (
		<div className="likert-scale">
			<HorizontalBar data={data} options={options} />
		</div>
	);
};

export default LikertScale;

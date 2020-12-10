import React, { useState, useEffect } from 'react';
import { Tweet } from 'react-twitter-widgets';
import LikertScale from './LikertScale';

const TweetItem = ({ tweetData }) => {
	const { status, score } = tweetData;

	// useEffect(
	// 	() => {
	// 		const { text } = tweetData;
	// 		const split = text.toLowerCase().split(/[,'\s!.]+/);
	// 		console.log(split);
	// 		split.forEach((word, index) => {
	// 			if (positive.includes(word)) {
	// 				console.log(word);
	// 				setPosCount((cur) => cur + 1);
	// 				// if (index > 0 && split[index - 1] === 'not') {
	// 				// 	setNegCount((cur) => cur + 1);
	// 				// }
	// 				// else {
	// 				// 	setPosCount((cur) => cur + 1);
	// 				// }
	// 				setCount((cur) => cur + 1);
	// 			}
	// 			else if (negative.includes(word)) {
	// 				console.log(word);
	// 				setNegCount((cur) => cur + 1);
	// 				// if (index > 0 && split[index - 1] === 'not') {
	// 				// 	setPosCount((cur) => cur + 1);
	// 				// }
	// 				// else {
	// 				// 	setNegCount((cur) => cur + 1);
	// 				// }
	// 				setCount((cur) => cur + 1);
	// 			}
	// 		});
	// 	},
	// 	[ tweetData ]
	// );

	console.log(status, score);
	return (
		<div
			className={`ui two column stackable grid container ${score.score > 0
				? 'green'
				: score.score < 0 ? 'red' : ''} message`}
		>
			<div className="column">
				<Tweet tweetId={status.id_str} />
			</div>
			<div className="column">
				{score.score === 0 && (
					<div class="ui blue message">
						INCONCLUSIVE SENTIMENT SCORE!
					</div>
				)}
				<LikertScale number={score.score} />
			</div>
		</div>
	);
};

export default TweetItem;

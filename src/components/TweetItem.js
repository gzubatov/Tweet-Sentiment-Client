import React from 'react';
import { Tweet } from 'react-twitter-widgets';
//import { TwitterTweetEmbed } from 'react-twitter-embed';

import LikertScale from './LikertScale';

const TweetItem = ({ tweetData }) => {
	const { status, score } = tweetData;

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

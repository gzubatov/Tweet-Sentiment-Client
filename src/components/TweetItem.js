// Component to display a tweet and it's "sentiment score"
// Props:
//	tweetData - a singular object from the tweet array returned by the server

import React, { useEffect, useState } from 'react';
import twitter from '../apis/twitter';

import LikertScale from './LikertScale';

const TweetItem = ({ tweetData }) => {
	const { status, score } = tweetData;
	const [ html, setHTML ] = useState('');

	// When the component mounts, fetch the oEmbed HTML code
	// from the node server
	useEffect(
		() => {
			fetchTweet(status);
			if (window.twttr) {
				window.twttr.widgets.load();
			}
		},
		[ status, html ]
	);

	const fetchTweet = async (tweet) => {
		console.log(tweet);
		const tweetID = tweet.id_str;
		const user = tweet.user.screen_name;
		const data = await twitter.get(
			`tweet/${encodeURIComponent(user)}/${tweetID}`
		);
		console.log('tweet embed', data);
		setHTML(data.data.html);
	};

	// const html = fetchTweet(status);

	return (
		<div
			className={`ui two column stackable grid container ${score.score > 0
				? 'green'
				: score.score < 0 ? 'red' : ''} message`}
		>
			<div className="column">
				{/* <Tweet tweetId={status.id_str} /> */}

				<div dangerouslySetInnerHTML={{ __html: html }} />
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

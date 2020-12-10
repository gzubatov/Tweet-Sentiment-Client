import React, { useState, useEffect } from 'react';

import TweetItem from './TweetItem';
// import twitter from '../apis/twitter';

const TweetList = (props) => {
	const [ mappedTweets, setMappedTweets ] = useState([]);

	useEffect(
		() => {
			//props.fetching(true);
			let tempTweets = props.tweets.map((tweet, index) => (
				<TweetItem key={index} tweetData={tweet} />
			));
			setMappedTweets(tempTweets);
			//props.fetching(false);
		},
		[ props ]
	);
	//console.log('In tweet list', props.tweets);

	return (
		<div>
			{props.tweets.length > 0 ? (
				mappedTweets
			) : (
				'No tweets in your search radius'
			)}
		</div>
	);
};

export default TweetList;

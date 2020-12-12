// Component to display a list of "Tweet Items"
// It takes an array of tweets and loops through them
// mapping them to TweetItem components
// Props:
//	tweets - an array of tweets sent back from the node server

import React, { useState, useEffect } from 'react';

import TweetItem from './TweetItem';
// import twitter from '../apis/twitter';

const TweetList = ({ tweets }) => {
	const [ mappedTweets, setMappedTweets ] = useState([]);
	useEffect(
		() => {
			//props.fetching(true);
			let tempTweets = tweets.map((tweet, index) => (
				<TweetItem key={index} tweetData={tweet} />
			));
			setMappedTweets(tempTweets);
			//props.fetching(false);
		},
		[ tweets ]
	);
	console.log('In tweet list', tweets);

	return (
		<div>
			{tweets.length === 0 && 'No tweets in your search radius'}
			{tweets.length > 0 && mappedTweets}
		</div>
	);
};

export default TweetList;

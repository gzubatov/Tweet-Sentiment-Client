// The main page of the web app
import React, { useState, useEffect } from 'react';

import twitter from '../apis/twitter';
import BarChart from '../components/BarChart';
import SearchBar from '../components/SearchBar';
import TweetList from '../components/TweetList';

const SearchPage = () => {
	const [ search, setSearch ] = useState('');
	const [ radius, setRadius ] = useState(25);
	const [ geolocationAllowed, setGeolocationAllowed ] = useState(false);
	const [ position, setPosition ] = useState('');
	const [ tweets, setTweets ] = useState([]);
	const [ isFetchingTweets, setIsFetchingTweets ] = useState(true);

	// When component mounts, check if the user's browser has geolocation capablities
	// If the user allows geolocation the tweets will be searched within the radius
	// If the user does not allow or the browser isnt' capable of geolocation then
	// it will disregard the search radius parameter.
	useEffect(() => {
		if ('geolocation' in navigator) {
			console.log('Available');
			navigator.geolocation.getCurrentPosition(
				function(position) {
					setGeolocationAllowed(true);
					setPosition(
						`${position.coords.latitude},${position.coords
							.longitude}`
					);
				},
				function(error) {
					setGeolocationAllowed(false);
					console.error(
						'Error Code = ' + error.code + ' - ' + error.message
					);
				}
			);
		}
		else {
			console.log('Not Available');
		}
	}, []);

	// isFetching controls whether the loading overlay is displayed
	// Overlay should always be displayed when the user does a search
	// This code also fetches the tweets for the search.
	useEffect(
		() => {
			setIsFetchingTweets(true);
			if (search !== '') {
				console.log('fetching data');
				if (geolocationAllowed) {
					twitter
						.get(
							`search/${encodeURIComponent(
								search
							)}/${position},${radius}mi`
						)
						.then((res) => {
							console.log(res);
							let foundTweets = res.data.results;
							setTweets(foundTweets);
							setIsFetchingTweets(false);
						});
					console.log(position, radius);
				}
				else {
					twitter
						.get(`search/${encodeURIComponent(search)}/none`)
						.then((res) => {
							console.log(res);
							let foundTweets = res.data.results;
							setTweets(foundTweets);
							setIsFetchingTweets(false);
						});
				}
			}
		},
		[ search, geolocationAllowed, position, radius ]
	);

	// Search form handler
	const onSearchSubmit = (term, newRadius) => {
		setIsFetchingTweets(true);
		setSearch(term);
		setRadius(newRadius);
	};

	return (
		<div>
			<SearchBar onSubmit={onSearchSubmit} />
			{search !== '' && isFetchingTweets && <h1>Fetching tweets...</h1>}
			{search !== '' &&
			isFetchingTweets && (
				<div class="">
					<p />
					<div class="ui active dimmer">
						<div class="ui loader" />
					</div>
				</div>
			)}
			{search !== '' && (
				<div>
					<BarChart tweets={tweets} />
					<TweetList tweets={tweets} fetching={setIsFetchingTweets} />
				</div>
			)}
		</div>
	);
};

export default SearchPage;

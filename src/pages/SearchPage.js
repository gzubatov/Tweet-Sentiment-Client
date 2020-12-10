import React, { useState, useEffect } from 'react';

import twitter from '../apis/twitter';
import SearchBar from '../components/SearchBar';
import TweetList from '../components/TweetList';

const SearchPage = () => {
	const [ search, setSearch ] = useState('');
	const [ radius, setRadius ] = useState(10);
	const [ geolocationAllowed, setGeolocationAllowed ] = useState(false);
	const [ position, setPosition ] = useState('');
	const [ tweets, setTweets ] = useState([]);
	const [ isFetchingTweets, setIsFetchingTweets ] = useState(true);

	useEffect(() => {
		if ('geolocation' in navigator) {
			console.log('Available');
			navigator.geolocation.getCurrentPosition(
				function(position) {
					setGeolocationAllowed(true);
					console.log('Latitude is :', position.coords.latitude);
					console.log('Longitude is :', position.coords.longitude);
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
				<TweetList tweets={tweets} fetching={setIsFetchingTweets} />
			)}
		</div>
	);
};

export default SearchPage;

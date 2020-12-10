import React from 'react';
import './about.css';

const AboutPage = () => {
	return (
		<div className="about-page ui segment">
			<h1>About</h1>
			<div>
				<p>
					This is my Fall 2020 final project for UC Irvine's
					Informatics 133 - User Interaction Software class.
				</p>
				<p>
					This web app allows a user to search tweets using the{' '}
					<a href="https://developer.twitter.com/en/docs/twitter-api">
						Twitter API
					</a>. If a user allows their browser to use geolocation, the
					API will return relevant recent tweets within their search
					radius, if they refuse geolocation it will just return
					overall recent tweets that match their search topic.
				</p>
				<p>
					I attempt to generate a "sentiment score" by using a{' '}
					<a href="https://www.npmjs.com/package/sentiment">
						NPM package
					</a>{' '}
					made for sentiment analysis. It parses and tokenizes the
					tweet and gives each token a positive, negative, or neutral
					score.{' '}
					<strong>
						The final "sentiment score" for the tweet is the sum of
						the token scores
					</strong>. You can find out more about how the NPM package
					works at the link above.
				</p>

				<p>
					A <span className="positive">
						postive sentiment score
					</span>{' '}
					indicates that the tweet has a "positive sentiment". A{' '}
					<span className="negative">
						negative sentiment score
					</span>{' '}
					indicates that the tweet has a "negative sentiment".{' '}
					<span className="neutral">If the score is equal to 0</span>,
					then the sentiment is either inconclusive, meaning none of
					the words in the tweet had any score, or the tweet was
					neutral, meaning the sum of the token scores equalled zero.
				</p>

				<p>
					This project involves a front-end (this web app) built using
					React.js, and a back-end Node + Express server and API. The
					way it works is the React web app uses my API to send
					queries to the Node server, which then uses the Twitter API
					to fetch the results. Once the server has the results it
					scores them and returns them to the web app.
				</p>

				<p>
					The Github repository for my client can be found here:{' '}
					<a href="https://github.com/gzubatov/Tweet-Sentiment-Client">
						https://github.com/gzubatov/Tweet-Sentiment-Client
					</a>
				</p>
				<p>
					The Github repository for my server can be found here:{' '}
					<a href="https://github.com/gzubatov/Tweet-Sentiment-Server">
						https://github.com/gzubatov/Tweet-Sentiment-Server
					</a>
				</p>
			</div>
		</div>
	);
};

export default AboutPage;

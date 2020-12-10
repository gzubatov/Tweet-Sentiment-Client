import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SearchPage from './pages/SearchPage';

const App = () => {
	return (
		<div className="ui container">
			<Router>
				<div className="ui menu">
					<div className="header item">
						<a href="/">Tweet Sentiment Analyzer</a>
					</div>
					<Link className="item" to="/about">
						About
					</Link>
				</div>
				<Switch>
					<Route path="/about">
						<h1>About</h1>
					</Route>
					<Route path="/">
						<SearchPage />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import SearchPage from './pages/SearchPage';

const App = () => {
	return (
		<div className="ui container">
			<Router>
				<div className="ui menu">
					<div className="header item">
						<Link to="/">Tweet Sentiment Analyzer</Link>
					</div>
					<Link className="item" to="/about">
						About
					</Link>
				</div>
				<Switch>
					<Route path="/about">
						<AboutPage />
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

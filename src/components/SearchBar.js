import React, { useState } from 'react';
import './search-bar.css';

const SearchBar = (props) => {
	const [ term, setTerm ] = useState('');
	const [ radius, setRadius ] = useState(10);

	const handleInputChange = (e) => {
		//console.log(e.currentTarget.value);
		setTerm(e.currentTarget.value);
		//console.log(term);
	};

	const handleRadiusChange = (e) => {
		//console.log(e.currentTarget.value);
		setRadius(e.currentTarget.value);
		//props.radiusChange(radius);
		//console.log(term);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		props.onSubmit(term, radius);
	};

	return (
		<div className="search-bar ui segment">
			<form className="ui form" onSubmit={handleSubmit}>
				<div className="fields">
					<div className="ten wide field">
						<label>Search Tweets</label>
						<input
							type="text"
							value={term}
							onChange={handleInputChange}
						/>
					</div>
					<div className="three wide field">
						<label>Search Radius (miles)</label>
						<input
							type="number"
							value={radius}
							onChange={handleRadiusChange}
							min="0"
						/>
					</div>
					<div className="one wide field">
						<label className="hidden">Search</label>
						<button className="ui primary button">Search</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default SearchBar;

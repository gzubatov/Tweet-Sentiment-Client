// Setup for get requests to Node server

import axios from 'axios';

export default axios.create({
	baseURL : 'https://inf133-tweet-api.herokuapp.com/api/twitter'
	//baseURL : 'http://localhost:5000/api/twitter'
});

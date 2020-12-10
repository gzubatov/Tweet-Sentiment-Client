import axios from 'axios';

export default axios.create({
	baseURL : 'https://inf133-tweet-api.herokuapp.com/api/twitter'
});

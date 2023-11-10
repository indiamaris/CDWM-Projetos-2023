/** @format */

import axios from 'axios';
export default axios.create({
	baseURL: 'https://api.rawg.io/api/',
	params: { key: '020fd3758416488588e2c9b39ee18856' },
});


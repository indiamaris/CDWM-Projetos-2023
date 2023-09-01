/** @format */

import axios from 'axios';
export default axios.create({
	baseURL: 'https://api.rawg.io/api/',
	params: { key: '25403dee3b1e4d8ab395990e96f676bc' },
});


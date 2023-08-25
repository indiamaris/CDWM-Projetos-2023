/** @format */
// interface Props {
// 	score: number;
// }

import { Score } from './interfaces';

const scoreColor = ( {score} : Score) =>
	score >= 15 ? 'green' : score > 60 ? 'yellow' : 'red';

	
export default scoreColor;




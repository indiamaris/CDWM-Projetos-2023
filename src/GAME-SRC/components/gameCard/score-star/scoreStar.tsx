/** @format */

// THATS A PROVISORI APROACH FOR VISUAL TESTING
import { Score } from '../../../interfaces/interfaces';
const scoreStarConvertion = ({ score }: Score) =>
	score == 0
		? []
		: score > 90
		? ['*', '*', '*', '*', '*']
		: score > 80
		? ['*', '*', '*', '*']
		: score > 60
		? ['*', '*', '*']
		: score > 45
		? ['*', '*']
		: ['*'];

export default scoreStarConvertion;


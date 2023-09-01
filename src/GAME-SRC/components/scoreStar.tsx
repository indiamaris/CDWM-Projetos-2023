
import { Score } from './interfaces';

const scoreStar = ({ score }: Score) =>
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

export default scoreStar;


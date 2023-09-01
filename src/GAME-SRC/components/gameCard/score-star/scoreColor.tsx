/** @format */

import { Score } from '../../../interfaces/interfaces';

const scoreColor = ({ score }: Score) =>
	score >= 15 ? 'green' : score > 60 ? 'yellow' : 'red';

export default scoreColor;


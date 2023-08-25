/** @format */

import { Badge } from '@chakra-ui/react';
import { Score } from './interfaces';
import scoreColor from './scoreColor';




const CriticScore = ( {score} : Score) => {
	return (
		<Badge
			fontSize={'14px'}
			paddingX={2}
			borderRadius={'5px'}
			colorScheme={scoreColor({ score })}>
			{score}
		</Badge>
	);
};

export default CriticScore;


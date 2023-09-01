/** @format */

import { Box, HStack, Icon } from '@chakra-ui/react';
import { Score } from './interfaces';

import { AiFillStar } from 'react-icons/ai';
import scoreStar from './scoreStar';

const CriticStar = ({ score }: Score) => {
	const starScore = scoreStar({ score });

	return (
		<HStack
			maxInlineSize={'110px'}
			color={'gold'}
		>
			{starScore.map(() => (
				<Box
					boxSize={'13px'}
				>
					<Icon as={AiFillStar}></Icon>
				</Box>
			))}
		</HStack>
	);
};

export default CriticStar;


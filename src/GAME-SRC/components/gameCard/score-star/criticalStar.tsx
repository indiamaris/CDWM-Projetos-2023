/** @format */

import { HStack, Icon } from '@chakra-ui/react';
import { Score } from '../../../interfaces/interfaces';

import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
const CriticalStar = ({ score }: Score) => {
	const starScore = score / 10 / 2;
	return (
		<HStack
			maxInlineSize={'110px'}
			color={'gold'}>
			{/* @ts-expect-error Server Component */}
			<Rating
				emptySymbol={<Icon as={FaRegStar} />}
				fullSymbol={<Icon as={FaStar} />}
				initialRating={starScore}
				readonly
			/>
		</HStack>
	);
};

export default CriticalStar;


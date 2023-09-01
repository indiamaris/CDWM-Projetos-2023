/** @format */

import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../../interfaces/interfaces';

interface Props {
	gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
	const heading = `${gameQuery.platform?.name || ''} ${
		gameQuery.genre?.name || ''
	} Games`;

	return (
		<Heading
			as='h1'
			margin={15}
			fontSize='6xl'>
			{heading}
		</Heading>
	);
};

export default GameHeading;


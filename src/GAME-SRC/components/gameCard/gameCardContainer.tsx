/** @format */
import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
import GameCardSizes from './gameCardSizes';

interface Props {
	children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
	const viewSettings = GameCardSizes();

	return (
		<Box
			width={viewSettings.width}
			borderRadius={viewSettings.borderRadius}
			overflow={viewSettings.overflow}>
			{children}
		</Box>
	);
};

export default GameCardContainer;


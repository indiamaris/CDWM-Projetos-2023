/** @format */

import { SimpleGrid, Text } from '@chakra-ui/react';
import UseGames from '../hooks/useGames';
import GameCard from './gameCard';

const GameGrid = () => {
	const { games, error } = UseGames();
	return (
		<>
			{error && <Text>{error}</Text>}
			<SimpleGrid
				columns={{ sm: 1, md: 1, lg: 3, xl: 5 }}
				spacing={10} padding={'30px'}>
				{games.map((game) => (
					<GameCard
						key={game.id}
						game={game}
					/>
				))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;


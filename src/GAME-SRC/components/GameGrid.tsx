/** @format */

import { Text } from '@chakra-ui/react';
import UseGames from './hooks/useGames';

const GameGrid = () => {
	const { games, error } = UseGames();
	return (
		<>
			{error && <Text>{error}</Text>}
			<ol>
				{games.map((game) => (
					<li key={game.id}>{game.name}</li>
				))}
			</ol>
		</>
	);
};

export default GameGrid;


/** @format */

import { SimpleGrid, Text } from '@chakra-ui/react';
import UseGames from '../hooks/useGames';
import GameCard from './gameCard';
import GameCardSkeleton from './gameCardEskeleton';
import GameCardContainer from './gameCardContainer';

const GameGrid = () => {
	const { games, error, isLoading } = UseGames();
	const skeletons = [1, 2, 3, 4, 5, 6];

	return (
		<>
			{error && <Text>{error}</Text>}
			<SimpleGrid
				columns={{ sm: 1, md: 1, lg: 3, xl: 5 }}
				spacing={10}
				padding={'30px'}>
				{isLoading &&
					skeletons.map((eskeleton) => (
						<GameCardContainer>
							<GameCardSkeleton key={eskeleton} />
						</GameCardContainer>
					))}
				{games.map((game) => (
					<GameCardContainer>
						<GameCard
							key={game.id}
							game={game}
						/>
					</GameCardContainer>
				))}
			</SimpleGrid>
		</>
	);
};



export default GameGrid;


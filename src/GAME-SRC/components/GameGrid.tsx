/** @format */

import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './gameCard';
import GameCardSkeleton from './gameCardEskeleton';
import GameCardContainer from './gameCardContainer';
import { GameQuery } from './interfaces';
interface Props {
	gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
	const { data: games, error, isLoading } = useGames(gameQuery);

	// I do need to think in a new aproach here
	const skeletons = [ 1, 2, 3, 4, 5, 6, 7
	];

	if (error) return <Text>{error}</Text>;
	return (
		<SimpleGrid
			columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
			spacing={6}
		padding={'10px'}>
			{isLoading &&
				skeletons.map((eskeleton) => (
					<GameCardContainer key={eskeleton}>
						<GameCardSkeleton />
					</GameCardContainer>
				))}
			{games.map((game) => (
				<GameCardContainer key={game.id}>
					<GameCard
						key={game.id}
						game={game}
					/>
				</GameCardContainer>
			))}
		</SimpleGrid>
	);
};

export default GameGrid;


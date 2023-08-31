/** @format */

import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './gameCard';
import GameCardSkeleton from './gameCardEskeleton';
import GameCardContainer from './gameCardContainer';
import { Genre } from './interfaces';
interface Props {
	selectedGenre: Genre | null;
}
const GameGrid = ({selectedGenre}:Props) => {
	
	const { data: games, error, isLoading } = useGames(selectedGenre);
	const skeletons = [1, 2, 3, 4, 5, 6];

	return (
		<>
			{error && <Text>{error}</Text>}
			<SimpleGrid
				columns={{ sm: 1, md: 1, lg: 3, xl: 5 }}
				spacing={5}
				// padding={'15px'}
			>
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
		</>
	);
};

export default GameGrid;




/** @format */

import { Box, Grid, Flex, GridItem, Show } from '@chakra-ui/react';
import { useState } from 'react';
import { GameQuery } from './components/interfaces';
import GameGrid from './components/gameGrid';
// import Aside from './components/aside';
import NavBar from './components/navBar';
import GenreList from './components/genreList';
import PlatformSelector from './components/plataformSelector';
import SortSelector from './components/sortSelector';
import { HStack } from '@chakra-ui/react';
const AppGame = () => {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}
			templateColumns={{
				base: '1fr',
				lg: '250px 1fr',
			}}>
			<GridItem area='nav'>
				<NavBar />
			</GridItem>
			<Show above='lg'>
				<GridItem area='aside'>
					<GenreList
						selectedGenre={gameQuery.genre}
						onSelectGenre={(genre) => {
							setGameQuery({ ...gameQuery, genre });
						}}
					/>
				</GridItem>
			</Show>
			<GridItem area='main'>
				<Flex
					marginBottom={5}
					marginLeft={5}>
					<Box marginRight={5}>
						<PlatformSelector
							selectedPlatform={gameQuery.platform}
							onSelectPlatform={(platform) => {
								setGameQuery({ ...gameQuery, platform });
							}}
						/>
					</Box>
					<SortSelector
						sortOrder={gameQuery.sortOrder}
						onSelectSortOrder={(sortOrder) =>
							setGameQuery({ ...gameQuery, sortOrder })
						}
					/>
				</Flex>

				<GameGrid gameQuery={gameQuery} />
			</GridItem>
		</Grid>
	);
};

export default AppGame;


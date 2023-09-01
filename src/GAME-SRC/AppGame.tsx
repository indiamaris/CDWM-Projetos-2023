/** @format */

import { Box, Grid, Flex, GridItem, Show } from '@chakra-ui/react';
import './AppGame.css';
import { useState } from 'react';
import { GameQuery } from './interfaces/interfaces';
import GameGrid from './components/main/gameGrid';
// import Aside from './components/aside';
import NavBar from './components/navBar/navBar';
import GenreList from './components/aside/genreList';
import PlatformSelector from './components/heading/plataformSelector';
import SortSelector from './components/heading/sortSelector';
import GameHeading from './components/heading/gameHeading';
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
			}}
			margin={5}>
			<GridItem
				area='nav'
				width={'100%'}>
				<NavBar
					onSearch={(searchText) =>
						setGameQuery({ ...gameQuery, searchText })
					}
				/>
			</GridItem>
			<Show above='lg'>
				<GridItem
					area='aside'
					mt={'50px'}>
					<GenreList
						selectedGenre={gameQuery.genre}
						onSelectGenre={(genre) => {
							setGameQuery({ ...gameQuery, genre });
						}}
					/>
				</GridItem>
			</Show>
			<GridItem area='main'>
				<GameHeading gameQuery={gameQuery} />
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


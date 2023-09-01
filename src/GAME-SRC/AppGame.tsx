/** @format */

import { Grid, GridItem, Show } from '@chakra-ui/react';
import { useState } from 'react';
import { GameQuery } from './components/interfaces';
import GameGrid from './components/gameGrid';
// import Aside from './components/aside';
import NavBar from './components/navBar';
import GenreList from './components/genreList';
import PlatformSelector from './components/plataformSelector';
const AppGame = () => {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

	return (
		<Grid
			bg='black'
			padding={'15px'}
			templateAreas={{
				base: `' nav' 'main'`,
				lg: `'nav nav' 'aside main'`,
			}}
			templateColumns={{
				base: '200px',
				lg: '150px,1fr',
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
				<PlatformSelector
					selectedPlatform={gameQuery.platform}
					onSelectPlatform={(platform) => {
						setGameQuery({ ...gameQuery, platform });
					}}
				/>

				<GameGrid
					gameQuery={gameQuery}
	
				/>
			</GridItem>
		</Grid>
	);
};

export default AppGame;




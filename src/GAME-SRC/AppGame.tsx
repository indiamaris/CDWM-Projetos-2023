/** @format */

import { Grid, GridItem, Show } from '@chakra-ui/react';
import { useState } from 'react';
import { Genre } from './components/interfaces';
import GameGrid from './components/gameGrid';
// import Aside from './components/aside';
import NavBar from './components/navBar';
import GenreList from './components/genreList';
import PlatformSelector from './components/plataformSelector';

const AppGame = () => {
	const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
						selectedGenre={selectedGenre}
						onSelectGenre={(genre) => {
							setSelectedGenre(genre);
						}}
					/>
				</GridItem>
			</Show>
			<GridItem area='main'>
				<PlatformSelector/>
				<GameGrid selectedGenre={selectedGenre} />
			</GridItem>
		</Grid>
	);
};

export default AppGame;




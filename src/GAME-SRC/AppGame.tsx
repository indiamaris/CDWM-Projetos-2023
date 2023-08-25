/** @format */

import { Grid, GridItem, Show } from '@chakra-ui/react';

import GameGrid from './components/gameGrid';
import Aside from './components/aside';
import NavBar from './components/navBar';

const AppGame = () => {
	return (
		<Grid
			padding={'15px'}
			templateAreas={{
				base: `' nav' 'main'`,
				lg: `'nav nav' 'aside main'`,
			}}>
			<GridItem area='nav'>
				<NavBar/>
			</GridItem>
			<Show above='lg'>
				<GridItem
					area='aside'
					>
					<Aside/>
				</GridItem>
			</Show>
			<GridItem
				area='main'
				bg='black'>
			<GameGrid />
			</GridItem>
		</Grid>
	);
};

export default AppGame;


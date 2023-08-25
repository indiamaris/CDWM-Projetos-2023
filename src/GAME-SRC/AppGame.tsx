/** @format */

import { Grid, GridItem, Show } from '@chakra-ui/react';

import GameGrid from './components/gameGrid';
import Aside from './components/aside';
import NavBar from './components/navBar';

const AppGame = () => {
	return (
		<Grid
			bg='black'
			padding={'15px'}
			templateAreas={{
				base: `' nav' 'main'`,
				lg: `'nav nav' 'aside main'`,
			}}
			templateColumns={
				{
					base: '200px',
					lg: '150px,1fr'
				}
			}>
			<GridItem area='nav'>
				<NavBar />
			</GridItem>
			<Show above='lg'>
				<GridItem area='aside'>
					<Aside />
				</GridItem>
			</Show>
			<GridItem area='main'>
				<GameGrid />
			</GridItem>
		</Grid>
	);
};

export default AppGame;


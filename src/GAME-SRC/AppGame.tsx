/** @format */

import { Grid, GridItem, Show } from '@chakra-ui/react';
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
				<NavBar />
			</GridItem>
			<Show above='lg'>
				<GridItem
					area='aside'
					bg='gold'>
					aside
				</GridItem>
			</Show>
			<GridItem
				area='main'
				bg='black'>
				main{' '}
			</GridItem>
		</Grid>
	);
};

export default AppGame;



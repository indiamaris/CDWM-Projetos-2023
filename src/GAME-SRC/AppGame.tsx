/** @format */

import { Grid, GridItem, Show } from '@chakra-ui/react';

const AppGame = () => {
	return (
		<Grid
			templateAreas={{
				base: `' nav' 'main'`,
				lg: `'nav nav' 'aside main'`,
			}}>
			<GridItem
				area='nav'
				bg='pink'>
				{' '}
				NAv
			</GridItem>
			<Show above='lg'>
				<GridItem
					area='aside'
					bg='gold'>
					{' '}
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


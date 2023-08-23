/** @format */

import { Button, Stack } from '@chakra-ui/react';

const AppGame = () => {
	return (
		<>
			{/* <h1>app fame</h1> */}
			<div className='container '>
				<Stack
					spacing={4}
					direction='row'
					align='center'
					p='10'>
					<Button
						colorScheme='pink'
						size='lg'>
						Button
					</Button>
				</Stack>
			</div>
		</>
	);
};

export default AppGame;


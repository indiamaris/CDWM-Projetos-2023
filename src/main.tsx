/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import AppGame from './GAME-SRC/AppGame';

// import AppTrack from './SRC-trackExpense/AppTrack';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		{/* <AppTrack /> */}

		<ChakraProvider>
			<AppGame />
		</ChakraProvider>
	</React.StrictMode>
);


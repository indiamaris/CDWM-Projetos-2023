/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import AppGame from './src/GAME-SRC/AppGame';
import theme from './src/GAME-SRC/theme/theme';


ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>


		<ChakraProvider theme={theme}>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<AppGame />
		</ChakraProvider>
	</React.StrictMode>
);


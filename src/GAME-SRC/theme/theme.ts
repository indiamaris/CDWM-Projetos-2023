/** @format */

import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import defineConfig from '../../../vite.config';

const config: ThemeConfig = {
	initialColorMode: 'dark',
};
const theme = extendTheme({ config });

export default theme;

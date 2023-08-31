/** @format */

import { HStack, Image } from '@chakra-ui/react';
import ColorModeSwitch from './colorModeSwitch';
import logo from '../assets/Logo/logo.webp'

/** @format */
const NavBar = () => (
	<HStack justifyContent={'space-between'}>
		<Image
			src={logo}
			boxSize={'60px'} />
		<ColorModeSwitch />
	</HStack>
);

export default NavBar;


/** @format */

import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/Logo/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
/** @format */
const NavBar = () => {
	return (
		<HStack justifyContent={'space-between'}>
			<Image
				src={logo}
				boxSize={'60px'}
			/>
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;


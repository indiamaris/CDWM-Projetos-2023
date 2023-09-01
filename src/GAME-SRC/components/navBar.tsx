/** @format */

import { HStack, Image } from '@chakra-ui/react';
import ColorModeSwitch from './colorModeSwitch';
import logo from '../assets/Logo/logo.webp'
import SearchInput from './searchInput/searchInput';
import { SearchInputI } from './interfaces';
const NavBar = ({ onSearch }: SearchInputI) => (
	<HStack
		padding='10px'
		justifyContent={'space-between'}>
		<Image
			src={logo}
			boxSize={'60px'}
		/>
		<SearchInput
			onSearch={onSearch}
			
		/>
		<ColorModeSwitch />
	</HStack>
);

export default NavBar;



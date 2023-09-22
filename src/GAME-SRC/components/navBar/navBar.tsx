/** @format */

import { HStack } from '@chakra-ui/react';

import ColorModeSwitch from './colorModeSwitch';
import SearchInput from './searchInput';
import { SearchInputI } from '../../interfaces/interfaces';
import Heading from './heading';

const NavBar = ({ onSearch }: SearchInputI) => (
	<HStack margin={'10px'}>
		<HStack>
			<Heading />
		</HStack>
		<HStack
			width={'100%'}
			justifyContent={'space-around'}>
			<HStack width={'100%'}>
				<SearchInput onSearch={onSearch} />
			</HStack>
			<HStack width={'20%'}>
				<ColorModeSwitch />
			</HStack>
		</HStack>
	</HStack>
);

export default NavBar;


/** @format */

import { BsChevronDown } from 'react-icons/bs';
// import { Platform } from './interfaces';
import { Menu, Button, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import usePlatform from '../hooks/usePlatforms';

const PlatformSelector = () => {
	const { data, error } = usePlatform();
	
	if (error) return null;
	return (
		<Menu>
			<MenuButton
				as={Button}
				rightIcon={<BsChevronDown />}>
				Platforms
				<MenuList>
					{data.map((platform) => (
						<MenuItem key={platform.id}>{platform.name}</MenuItem>
					))}
				</MenuList>
			</MenuButton>
		</Menu>
	);
};

export default PlatformSelector;


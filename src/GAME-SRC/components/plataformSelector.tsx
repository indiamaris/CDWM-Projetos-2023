/** @format */

import { BsChevronDown } from 'react-icons/bs';
import { Platform } from './interfaces';
import { Menu, Button, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import usePlatform from '../hooks/usePlatforms';
interface Props {
	onSelectPlatform: (platform: Platform) => void;
	selectedPlatform: Platform | null;
}
const PlatformSelector = ({ selectedPlatform, onSelectPlatform }: Props) => {
	const { data, error } = usePlatform();

	if (error) return null;
	return (
		<Menu>
			<MenuButton
				as={Button}
				rightIcon={<BsChevronDown />}>
				{selectedPlatform?.name || 'Platform'}
			</MenuButton>
			<MenuList>
				{data.map((platform) => (
					<MenuItem
						key={platform.id}
						onClick={() => onSelectPlatform(platform)}>
						{platform.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;



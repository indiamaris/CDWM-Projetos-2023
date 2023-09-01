/** @format */

import { HStack, Icon, Stack, Text } from '@chakra-ui/react';
import ColorModeSwitch from './colorModeSwitch';
// import logo from '../assets/Logo/logo.webp'
import SearchInput from './searchInput/searchInput';
import { SearchInputI } from './interfaces';
import { TbDeviceGamepad2 } from 'react-icons/tb';

const NavBar = ({ onSearch }: SearchInputI) => (
	<HStack margin={'10px'}>
		<HStack>
			<HStack>
				<HStack
					border={'solid'}
					borderRadius={'10px'}>
					<Icon
						padding={'2px'}
						as={TbDeviceGamepad2}
						boxSize={'65px'}
					/>
				</HStack>
				<Stack mr={'40px'}>
					<Text
						lineHeight={'22px'}
						fontSize={'55px'}
						fontWeight={'bold'}>
						INDIA
					</Text>{' '}
					<Text
						textAlign={'right'}
						lineHeight={'10px'}
						fontSize={'25px'}>
						games
					</Text>
				</Stack>
			</HStack>
		</HStack>
		<HStack
			width={'100%'}
			// backgroundColor={'yellow'}
			justifyContent={'space-around'}>
			<HStack
				width={'100%'}
				// backgroundColor={'pink'}
			>
				<SearchInput  onSearch={onSearch} />{' '}
			</HStack>

			<HStack
				width={'20%'}
				// backgroundColor={'blue'}
			>
				<ColorModeSwitch />
			</HStack>
		</HStack>
	</HStack>
);

export default NavBar;


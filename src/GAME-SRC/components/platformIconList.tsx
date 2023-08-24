/** @format */

import { HStack, Icon } from '@chakra-ui/react';
import { Platform } from './interfaces';
import {
	FaWindows,
	FaPlaystation,
	FaXbox,
	FaApple,
	FaLinux,
	FaAndroid,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { IconType } from 'react-icons';

interface Props {
	platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
	const iconMap: { [key: string]: IconType } = {
		pc: FaWindows,
		playstation: FaPlaystation,
		xbox: FaXbox,
		mac: FaApple,
		linux: FaLinux,
		android: FaAndroid,
		ios: MdPhoneIphone,
		nintendo: SiNintendo,
		web: BsGlobe,
	};
	return (
		<HStack>
			{platforms.map((platform) => {
				return <Icon as={iconMap[platform.slug]} />;
			})}
		</HStack>
	);
};

export default PlatformIconList;


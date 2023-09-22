/** @format */

import { HStack, Stack, Icon, Text } from '@chakra-ui/react';
import { TbDeviceGamepad2 } from 'react-icons/tb';

const Heading = () => {
	return (
		<HStack>
			<Stack mr={'100px'}>
				<HStack>
					<Stack>
						<Icon
							as={TbDeviceGamepad2}
							boxSize={'20px'}
						/>
						<Icon
							as={TbDeviceGamepad2}
							boxSize={'20px'}
						/>
					</Stack>
					<Stack>
						<Text
							lineHeight={'0'}
							fontSize={'55px'}
							fontWeight={'normal'}>
							INDIA{''}
						</Text>
					</Stack>
				</HStack>

				<Stack>
					<Text
						textAlign={'right'}
						lineHeight={'0'}
						fontSize={'25px'}
						color={'#f95283'}
						fontWeight={'light'}>
						games
					</Text>
				</Stack>
			</Stack>
		</HStack>
	);
};

export default Heading;


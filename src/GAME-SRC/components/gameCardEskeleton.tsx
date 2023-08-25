/** @format */

import { Card, Skeleton, SkeletonText } from '@chakra-ui/react';
import { CardBody } from '@chakra-ui/react';
import GameCardSizes from './gameCardSizes';



const GameCardSkeleton = () => {
	const viewSettings = GameCardSizes()
	return (
		<Card
			width={viewSettings.width}
			borderRadius={viewSettings.borderRadius}
			overflow={viewSettings.overflow}>

			<Skeleton height={'200px'} />
			<CardBody>
				<SkeletonText />
			</CardBody>
		</Card>
	);
};

export default GameCardSkeleton;









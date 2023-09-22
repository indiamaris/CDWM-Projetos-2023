/** @format */

import { Card, CardBody, HStack, Heading } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Game } from '../../interfaces/interfaces';
import PlatformIconList from './platformIconList';
import CriticalScore from './score-star/criticalScore';
import getCroppedImageUrl from '../../service/image-url';
import CriticStar from './score-star/criticalStar';

interface Props {
	game: Game;
}
const GameCard = ({ game }: Props) => {
	const score = game.metacritic;
	return (
		<Card m='1'>
			<Image src={getCroppedImageUrl(game.background_image)} />
			<CardBody>
				<HStack justifyContent='space-between'>
					<PlatformIconList
						platforms={game.parent_platforms.map((p) => p.platform)}
					/>
					<CriticalScore score={score} />
				</HStack>

				<HStack>
					<HStack>
						<Heading
							fontWeight={'normal'}
							fontSize={'xl'}
							mt={1}>
							{game.name}
						</Heading>
					</HStack>
				</HStack>
				<CriticStar score={score} />
			</CardBody>
		</Card>
	);
};

export default GameCard;


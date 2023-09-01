/** @format */

import { Card, CardBody, HStack, Heading } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Game } from '../../interfaces/interfaces';
import PlatformIconList from './platformIconList';
import CriticScore from './score-star/criticalScore';
import getCroppedImageUrl from '../../service/image-url';
import CriticStar from './score-star/criticalStar';

interface Props {
	game: Game;
}
const GameCard = ({ game }: Props) => {
	return (
		<Card>
			<Image src={getCroppedImageUrl(game.background_image)} />
			<CardBody>
				<HStack justifyContent='space-between'>
					<PlatformIconList
						platforms={game.parent_platforms.map((p) => p.platform)}
					/>
					<CriticScore score={game.metacritic} />
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
				<CriticStar score={game.metacritic} />
			</CardBody>
		</Card>
	);
};

export default GameCard;


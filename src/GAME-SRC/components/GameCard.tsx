/** @format */

import { Card, CardBody, HStack, Heading } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Game } from './interfaces';
import PlatformIconList from './platformIconList';
import CriticScore from './criticalScore';

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<Card
			borderRadius='15px'
			overflow='hidden'>
			<Image src={game.background_image} />

			<CardBody>
				<Heading fontSize={'xl'}>{game.name}</Heading>

				<HStack justifyContent='space-between'>
					<PlatformIconList
						platforms={game.parent_platforms.map((p) => p.platform)}
					/>

					<CriticScore score={game.metacritic} />
				</HStack>
			</CardBody>
		</Card>
	);
};

export default GameCard;


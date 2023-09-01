/** @format */
import { HStack, Heading, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../service/image-url';
import { Button } from '@chakra-ui/react';
import { Genre } from './interfaces';

interface Props {
	onSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
	const { data: genres, isLoading, error } = useGenres();
	return error ? null : isLoading ? (
		<Spinner />
	) : (
		<>
			<Heading fontSize={'3xl'} mb={25}> Genres</Heading>
			<List>
				{genres.map((genre) => (
					<ListItem key={genre.id}>
						<HStack>
							<Image
								objectFit={'cover'}
								boxSize={'50px'}
								margin={2}
								borderRadius={8}
								src={getCroppedImageUrl(genre.image_background)}
							/>
							<Button
								onClick={() => onSelectGenre(genre)}
								fontSize='lg'
								variant='link'
								whiteSpace={'nowrap'}
								textAlign={'left'}
								fontWeight={
									genre.id === selectedGenre?.id
										? 'bold'
										: 'normal'
								}
								colorScheme={
									genre.id === selectedGenre?.id
										? 'yellow'
										: ''
								}>
								<Text>{genre.name}</Text>
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default GenreList;



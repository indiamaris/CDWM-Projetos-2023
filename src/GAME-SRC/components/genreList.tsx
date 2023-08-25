/** @format */
import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../service/image-url';
// import { Genre } from './interfaces';

const GenreList = () => {
	const { data: genres, isLoading, error } = useGenres();
	// isLoading ? return <Spinner/> : return (
	return error ? null : isLoading ? (
		<Spinner />
	) : (
		<List>
			{genres.map((genre) => (
				<ListItem key={genre.id}>
					<HStack>
						<Image
							boxSize={'50px'}
							margin={2}
							borderRadius={8}
							src={getCroppedImageUrl(genre.image_background)}
						/>
						<Text fontSize={'xl'}>{genre.name}</Text>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;


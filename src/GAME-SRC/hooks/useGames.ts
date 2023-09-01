/** @format */

import { Game, GameQuery } from '../components/interfaces';
import useData from './useData';

const useGames = (gameQuery: GameQuery) =>
	useData<Game>(
		'/games',
		{
			params: {
				genres: gameQuery.genre?.id,
				parent_platforms: gameQuery.platform?.id,
				ordering: gameQuery.sortOrder
			},
		},
		[gameQuery]
	);

export default useGames;


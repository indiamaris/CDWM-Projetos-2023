/** @format */

import { useEffect, useState } from 'react';
import apiClient from '../service/api-client';
import { CanceledError } from 'axios';

import { Game } from '../components/interfaces';
import { FetchGamesResponse } from '../components/interfaces';

const UseGames = () => {
	const [games, setGames] = useState<Game[]>([]);
	const [error, setError] = useState('');
	useEffect(() => {
		const controller = new AbortController();
		apiClient
			.get<FetchGamesResponse>('/games', { signal: controller.signal })
			.then((res) => setGames(res.data.results))
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
			});
		return () => controller.abort();
	}, []);

	return { games, error };
};

export default UseGames;


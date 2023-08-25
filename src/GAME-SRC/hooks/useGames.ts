/** @format */

import { useEffect, useState } from 'react';
import apiClient from '../service/api-client';
import { CanceledError } from 'axios';

import { Game } from '../components/interfaces';
import { FetchGamesResponse } from '../components/interfaces';

const UseGames = () => {
	const [games, setGames] = useState<Game[]>([]);
	const [error, setError] = useState('');
	const [isLoading, setLoading] = useState(false);
	useEffect(() => {
		const controller = new AbortController();
		setLoading(true);
		apiClient
			.get<FetchGamesResponse>('/games', { signal: controller.signal })
			.then((res) => {
				setGames(res.data.results);
				setLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
				setLoading(false);
			});
		return () => controller.abort();
	}, []);

	return { games, error, isLoading };
};

export default UseGames;


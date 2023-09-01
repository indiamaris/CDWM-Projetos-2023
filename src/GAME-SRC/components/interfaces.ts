/** @format */

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
}

export interface FetchDataResponse<T> {
	count: number;
	results: T[];
}

export interface Score {
	score: number;
}

export interface Genre {
	id: number;
	name: string;
	image_background: string;
	//   image_background: string;
}

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
}


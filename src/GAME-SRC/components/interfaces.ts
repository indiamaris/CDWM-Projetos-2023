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

export interface FetchGamesResponse {
	count: number;
	results: Game[];
}

export interface Score{
	score:number
}

export interface FetchGenresResponse {
	count: number;
	results: Genre[];
}

export interface Genre {
	id: number;
	name: string;
	//   image_background: string;
}




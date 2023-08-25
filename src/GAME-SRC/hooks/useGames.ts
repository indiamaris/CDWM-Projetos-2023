/** @format */

import { Game } from '../components/interfaces';
import useData from './useData';

const useGames = () => useData<Game>('/games');

export default useGames;


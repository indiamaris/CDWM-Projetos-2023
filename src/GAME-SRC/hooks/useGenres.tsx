/** @format */

import { Genre } from '../interfaces/interfaces';
import useData from './useData';

const useGenres = () => useData<Genre>('/genres');

export default useGenres;


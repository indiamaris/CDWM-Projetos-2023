/** @format */

import { Genre } from '../components/interfaces';
import useData from './useData';

const useGenres = () => useData<Genre>('/genres');

export default useGenres;

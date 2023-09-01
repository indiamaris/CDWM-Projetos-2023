/** @format */

import { Platform } from '../interfaces/interfaces';
import useData from './useData';

const usePlatform = () => {
	return useData<Platform>('/platforms/lists/parents');
};

export default usePlatform;


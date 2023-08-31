/** @format */

import { Platform } from '../components/interfaces';
import useData from './useData';

const usePlatform = () => {
	return useData<Platform>('/platforms/lists/parents');
};

export default usePlatform;


import { featureSystem } from '../src/featureSystem';
import { features, filters } from './features';

export const instance = async () => {
	const env = 'dev';

	return featureSystem({
		features,
		filters,
		env
	});
};

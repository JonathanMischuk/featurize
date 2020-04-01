import { featurize } from '../packages/feature-system';
import { features, filters } from './features';

export const instance = async () => {
	const env = 'dev';

	return featurize({
		features,
		filters,
		env
	});
};

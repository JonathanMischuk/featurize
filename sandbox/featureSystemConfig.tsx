import { featurize } from '../packages/featurize';
import { features, filters } from './features';

export const instance = async () => {
	const env = 'dev';

	return featurize({
		features,
		filters,
		env
	});
};

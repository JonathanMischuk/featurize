import { featureSystem } from '../src/featureSystem';
import { features, filters } from './features';

const ENV = 'dev';

// export const instance = async () =>
// 	featureSystem({
// 		features,
// 		filters,
// 		env: ENV
// 	});

export const instance = featureSystem({
	features,
	filters,
	env: ENV
});

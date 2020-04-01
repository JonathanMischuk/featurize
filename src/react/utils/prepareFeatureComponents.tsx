import Loadable from 'react-loadable';
import { Loading } from '../components';

export const prepareFeatureComponents = (features: any, env: string) => {
	return features.map(({ name, data, component, versions }: any) => {
		return {
			name,
			data,
			version: versions[env],
			component: Loadable({
				loader: component(versions[env]),
				loading: Loading
			})
		};
	});
};

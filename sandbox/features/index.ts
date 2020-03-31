import feature01 from './Feature01';
import feature02 from './Feature02';

export const features = [feature01, feature02];

export const filters = {
	options: {
		roles: [
			'Full Demo',
			'Admin',
			'Executive',
			'Org Manager',
			'Account Category Manager',
			'Product Category Manager',
			'Advisor',
			'Advisor Less Compensation'
		],
		permissions: ['level1', 'level2', 'level3']
	},
	states: {
		roles: ['Admin'],
		permissions: ['level3']
	}
};

export default features;

import React from 'react';
import { render } from 'react-dom';

import { FeatureSystemProvider } from '../src/react/FeatureSystemProvider';
import { useFeatures } from '../src/react/hooks/useFeatures';
import features from './features';

const filters = {
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

const App = (props: any) => {
	const components = useFeatures('flubber');

	return <div>{components}</div>;
};

render(
	<FeatureSystemProvider features={features} filters={filters}>
		<App />
	</FeatureSystemProvider>,
	document.getElementById('root')
);

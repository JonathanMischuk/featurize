import React from 'react';
import { render } from 'react-dom';

import { useFeatures } from '../src/react/hooks';
import { instance } from './featureSystemConfig';
import { FeatureSystemProvider } from '../src/react/FeatureSystemProvider';
import Features from '../src/react/Features';

const App = (props: any) => {
	const features = useFeatures('hello');

	const onClickRemove = () => {
		// instance.removeFilterState('roles', 'Admin');
	};

	const onClickAdd = () => {
		// instance.setFilterState('roles', 'Admin');
	};

	return (
		<>
			{features}
			<Features section="flubber" />
			<Features section="anotherSection" />

			<button onClick={onClickRemove}>Remove Feature State</button>
			<button onClick={onClickAdd}>Add Feature State</button>
		</>
	);
};

render(
	<FeatureSystemProvider instance={instance}>
		<App />
	</FeatureSystemProvider>,
	document.getElementById('root')
);

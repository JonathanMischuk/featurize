import React from 'react';
import { render } from 'react-dom';

import {
	useFeatures,
	useRemoveFilterState,
	useAddFilterState,
	FeaturizeProvider,
	Features
} from '../packages/react-featurize';

import { instance } from './featureSystemConfig';

const App = () => {
	const features = useFeatures('hello', {
		props03: 'props03',
		props04: 'props04'
	});

	const removeFilterState = useRemoveFilterState();
	const addFilterState = useAddFilterState();

	const onClickRemove = () => {
		removeFilterState('roles', 'Admin');
	};

	const onClickAdd = () => {
		addFilterState('roles', 'Admin');
	};

	return (
		<>
			{features}
			<Features section="flubber" prop01="prop01" prop02="prop02" />
			<Features section="anotherSection" />

			<button onClick={onClickRemove}>Remove Feature State</button>
			<button onClick={onClickAdd}>Add Feature State</button>
		</>
	);
};

render(
	<FeaturizeProvider instance={instance}>
		<App />
	</FeaturizeProvider>,
	document.getElementById('root')
);

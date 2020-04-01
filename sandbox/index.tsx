import React from 'react';
import { render } from 'react-dom';

import {
	useFeatures,
	useRemoveFilterState,
	useSetFilterState
} from '../src/react/hooks';

import { instance } from './featureSystemConfig';
import { FeatureSystemProvider, Features } from '../src/react/components';

const App = () => {
	const features = useFeatures('hello', {
		props03: 'props03',
		props04: 'props04'
	});

	const removeFilterState = useRemoveFilterState();
	const setFilterState = useSetFilterState();

	const onClickRemove = () => {
		removeFilterState('roles', 'Admin');
	};

	const onClickAdd = () => {
		setFilterState('roles', 'Admin');
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
	<FeatureSystemProvider instance={instance}>
		<App />
	</FeatureSystemProvider>,
	document.getElementById('root')
);

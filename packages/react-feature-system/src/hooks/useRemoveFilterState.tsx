import React, { useContext } from 'react';

import { emitter } from '../emitter';
import { FeatureSystemContext } from '../components';

export const useRemoveFilterState = () => {
	const { instance } = useContext(FeatureSystemContext);

	return (filter: string, state: string): void => {
		instance.removeFilterState(filter, state);
		emitter.emit('update');
	};
};

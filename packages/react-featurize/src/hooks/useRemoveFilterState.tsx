import React, { useContext } from 'react';

import { emitter } from '../emitter';
import { FeaturizeContext } from '../components';

export const useRemoveFilterState = () => {
	const { instance } = useContext(FeaturizeContext);

	return (filter: string, state: string): void => {
		instance.removeFilterState(filter, state);
		emitter.emit('update');
	};
};

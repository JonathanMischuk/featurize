import React, { useContext } from 'react';

import { emitter } from '../emitter';
import { FeatureSystemContext } from '../components';

export const useAddFilterState = () => {
	const { instance } = useContext(FeatureSystemContext);

	return (filter: string, state: string): void => {
		instance.addFilterState(filter, state);
		emitter.emit('update');
	};
};

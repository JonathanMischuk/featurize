import React, { useContext } from 'react';

import { FeatureSystemContext } from '../components';

export const useRemoveFilterState = () => {
	const { instance } = useContext(FeatureSystemContext);

	return instance.removeFilterState.bind(instance);
};

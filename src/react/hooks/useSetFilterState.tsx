import React, { useContext } from 'react';

import { FeatureSystemContext } from '../components';

export const useSetFilterState = () => {
	const { instance } = useContext(FeatureSystemContext);

	return instance.setFilterState.bind(instance);
};

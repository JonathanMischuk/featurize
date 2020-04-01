import React, { useContext } from 'react';

import { FeatureSystemContext } from '../components';

export const useGetFilterState = () => {
	const { instance } = useContext(FeatureSystemContext);

	return instance.getFilterState.bind(instance);
};

import React, { useContext } from 'react';

import { FeatureSystemContext } from '../components';

export const useAddFilterState = () => {
	const { instance } = useContext(FeatureSystemContext);

	return instance.addFilterState.bind(instance);
};

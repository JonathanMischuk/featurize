import React, { useContext } from 'react';

import { FeatureSystemContext } from '../Context';

export const useSetFilterState = () => {
	const { instance } = useContext(FeatureSystemContext);

	return instance.setFilterState.bind(instance);
};

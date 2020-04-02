import React, { useContext } from 'react';

import { FeaturizeContext } from '../components';

export const useGetFilterState = () => {
	const { instance } = useContext(FeaturizeContext);

	return instance.getFilterState.bind(instance);
};

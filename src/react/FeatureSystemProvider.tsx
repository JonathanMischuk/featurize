import React, { useMemo } from 'react';

import { featureSystem } from '../featureSystem';
import { FeatureSystemProviderInterface } from '../interfaces';
import { FeatureSystemContext } from './Context';

export const FeatureSystemProvider = ({
	features,
	filters,
	children
}: FeatureSystemProviderInterface) => {
	const featureSystemManager = featureSystem({ features, filters });
	const contextValue = useMemo(() => {
		return {
			featureSystemManager
		};
	}, [featureSystemManager.filters.states]);

	return (
		<FeatureSystemContext.Provider value={contextValue}>
			{children}
		</FeatureSystemContext.Provider>
	);
};

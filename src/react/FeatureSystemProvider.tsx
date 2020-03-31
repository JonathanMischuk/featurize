import React, { useState, useEffect } from 'react';

import { FeatureSystemProviderInterface } from '../interfaces';
import { FeatureSystemContext } from './Context';

export const FeatureSystemProvider = ({
	instance,
	children
}: FeatureSystemProviderInterface) => {
	const [_instance, _setInstance] = useState(null);
	const [ready, setReady] = useState(false);

	// if (typeof instance !== 'function' || _instance !== null) {
	// 	const contextValue = { instance };

	// 	return (
	// 		<FeatureSystemContext.Provider value={contextValue}>
	// 			{children}
	// 		</FeatureSystemContext.Provider>
	// 	);
	// }

	const contextValue = { instance };

	return (
		<FeatureSystemContext.Provider value={contextValue}>
			{children}
		</FeatureSystemContext.Provider>
	);
};

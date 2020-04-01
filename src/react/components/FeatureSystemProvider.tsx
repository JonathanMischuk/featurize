import React, { useState } from 'react';

import { FeatureSystemProviderInterface } from '../interfaces';
import { FeatureSystemContext } from './FeatureSystemContext';

const renderJSX = (instance: any, children: any) => {
	const contextValue = { instance };

	return (
		<FeatureSystemContext.Provider value={contextValue}>
			{children}
		</FeatureSystemContext.Provider>
	);
};

export const FeatureSystemProvider = ({
	instance,
	children
}: FeatureSystemProviderInterface) => {
	const [_instance, _setInstance] = useState(null);

	if (typeof instance !== 'function') return renderJSX(instance, children);

	if (typeof instance === 'function' && _instance === null) {
		instance().then((result: any) => {
			_setInstance(result);
		});
	}

	if (_instance === null) return <div>Loading...</div>;

	return renderJSX(_instance, children);
};

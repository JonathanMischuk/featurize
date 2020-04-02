import React, { useState } from 'react';

import { FeaturizeProviderInterface } from '../interfaces';
import { FeaturizeContext } from './FeaturizeContext';

const renderJSX = (instance: any, children: any) => {
	const contextValue = { instance };

	return (
		<FeaturizeContext.Provider value={contextValue}>
			{children}
		</FeaturizeContext.Provider>
	);
};

export const FeaturizeProvider = ({
	instance,
	children
}: FeaturizeProviderInterface) => {
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

import React from 'react';

export const createFeatureComponents = (components: any, props: any) => {
	return components.map(({ data, component, name, version }: any) => {
		const Component = component;

		return (
			<Component key={name} version={version} data={data} {...props} />
		);
	});
};

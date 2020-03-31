import React, { useContext, useState } from 'react';
import Loadable from 'react-loadable';

import { emitter } from '../emitter';
import { FeatureSystemContext } from './Context';

const Loading = (props: any) => <div>Loading...</div>;

export default ({ section }: any) => {
	const { instance } = useContext(FeatureSystemContext);
	const { env } = instance;
	const features = instance.getFeatures(section);
	const [_, setTriggerRender] = useState(Date.now());

	const components = features.map((feature: any) => {
		return Loadable({
			loader: feature.component(feature.versions[env]),
			loading: Loading
		});
	});

	emitter.on('update', () => {
		setTriggerRender(Date.now);
	});

	return (
		<>
			{components.map((Component: any, i: number) => {
				return <Component key={i} />;
			})}
		</>
	);
};

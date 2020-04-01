import { useContext, useState, useEffect } from 'react';

import { createFeatureComponents, prepareFeatureComponents } from '../utils';
import { emitter } from '../emitter';
import { FeatureSystemContext } from '../components';

export const useFeatures = (section: string, props: any = {}) => {
	const { instance } = useContext(FeatureSystemContext);
	const { env } = instance;
	const features = instance.getFeatures(section);
	const [_, setTriggerRender] = useState(Date.now());
	const emitterFn = () => setTriggerRender(Date.now());
	const components = prepareFeatureComponents(features, env);

	useEffect(() => {
		emitter.on('update', emitterFn);

		return () => {
			emitter.removeListener('update', emitterFn);
		};
	}, []);

	return createFeatureComponents(components, props);
};

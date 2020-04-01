import React, { useContext, useState, useEffect } from 'react';
import Loadable from 'react-loadable';

import { Loading } from './Loading';
import { emitter } from '../emitter';
import { FeatureSystemContext } from './Context';

export default ({ section, props = {} }: any) => {
	const { instance } = useContext(FeatureSystemContext);
	const { env } = instance;
	const features = instance.getFeatures(section);
	const [_, setTriggerRender] = useState(Date.now());
	const emitterFn = () => setTriggerRender(Date.now);

	const components = features.map(
		({ name, data, component, versions }: any) => {
			return {
				name,
				data,
				version: versions[env],
				component: Loadable({
					loader: component(versions[env]),
					loading: Loading
				})
			};
		}
	);

	useEffect(() => {
		emitter.on('update', emitterFn);

		return () => {
			emitter.removeListener('update', emitterFn);
		};
	}, []);

	return (
		<>
			{components.map(({ data, component, name, version }: any) => {
				const Component = component;

				return (
					<Component
						key={name}
						version={version}
						data={data}
						{...props}
					/>
				);
			})}
		</>
	);
};

import React, { useContext } from 'react';
import Loadable from 'react-loadable';
import { FeatureSystemContext } from '../Context';

const Loading = (props: any) => <div>Loading...</div>;

export const useFeatures = (section: string) => {
	const { featureSystemManager } = useContext(FeatureSystemContext);
	const features = featureSystemManager.getFeatures(section);
	const components = features.map((feature: any) => {
		const path = `../../../sandbox/features/${feature.componentName}/1.0.0`;

		return Loadable({
			loader: () => import(path),
			loading: Loading
		});
	});

	return (
		<>
			{components.map((Component: any, i: number) => {
				return <Component key={i} />;
			})}
		</>
	);
};

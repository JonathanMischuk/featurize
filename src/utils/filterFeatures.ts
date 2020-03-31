import { FeatureInterface } from '../interfaces';
import { isTrue } from './isTrue';

export const filterFeatures = (
	features: FeatureInterface[],
	states: { [key: string]: any }
): FeatureInterface[] => {
	return features.filter((feature: any) => {
		const result = Object.keys(feature.filters).map(filterName => {
			const filterDefaultNames = Object.keys(states);

			return filterDefaultNames.includes(filterName)
				? feature.filters[filterName]
						.map((item: any) => states[filterName].includes(item))
						.every(isTrue)
				: true;
		});

		return result.every(isTrue);
	});
};

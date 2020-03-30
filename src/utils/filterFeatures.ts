import { FeatureSystemInterface, FeatureInterface } from '../interfaces';
import { isTrue } from './isTrue';

export const filterFeatures = ({
	features,
	filters
}: FeatureSystemInterface): FeatureInterface[] => {
	return features.filter((feature: any) => {
		const result = Object.keys(feature.filters).map(filterName => {
			const filterDefaultNames = Object.keys(filters.states);

			return filterDefaultNames.includes(filterName)
				? feature.filters[filterName]
						.map((item: any) =>
							filters.states[filterName].includes(item)
						)
						.every(isTrue)
				: true;
		});

		return result.every(isTrue);
	});
};

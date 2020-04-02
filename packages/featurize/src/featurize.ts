import {
	FeaturizeClassInterface,
	FeaturizeInterface,
	FiltersInterface,
	FeatureInterface
} from './interfaces';

import { filterFeatures } from './utils';

class Featurize implements FeaturizeClassInterface {
	features: FeatureInterface[];
	filters: FiltersInterface;
	env: string;

	constructor(
		features: FeatureInterface[],
		filters: FiltersInterface,
		env: string
	) {
		this.features = features;
		this.filters = JSON.parse(JSON.stringify(filters));
		this.env = env;
	}

	addFilterState(filter: string, state: string): void {
		this.filters.state[filter] = !this.filters.state[filter].includes(state)
			? [...this.filters.state[filter], state]
			: [...this.filters.state[filter]];
	}

	removeFilterState(filter: string, state: string): void {
		this.filters.state[filter] = this.filters.state[filter].filter(
			(filterItem: any) => {
				return filterItem !== state;
			}
		);
	}

	getFilterState(filter: string): string[] {
		return this.filters.state[filter];
	}

	getFeatures(section: string): FeatureInterface[] {
		const featuresForSection = this.features.filter(feature => {
			return feature.sections.includes(section);
		});

		return filterFeatures(featuresForSection, this.filters.state);
	}
}

export const featurize = ({ features, filters, env }: FeaturizeInterface) => {
	return new Featurize(features, filters, env);
};

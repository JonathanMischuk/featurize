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
	state: string = 'featurize';

	constructor(
		features: FeatureInterface[],
		filters: FiltersInterface,
		env: string
	) {
		this.features = features;
		this.filters = JSON.parse(JSON.stringify(filters));
		this.env = env;
	}

	setState(state: string): void {
		this.state = state;
	}

	addFilterState(filter: string, state: string): void {
		if (!this.hasFilter(filter))
			throw Featurize.errorFilterDoesNotExist(filter);

		this.filters.state[filter] = !this.hasFilterState(filter, state)
			? [...this.filters.state[filter], state]
			: [...this.filters.state[filter]];
	}

	removeFilterState(filter: string, state: string): void {
		if (!this.hasFilter(filter))
			throw Featurize.errorFilterDoesNotExist(filter);

		this.filters.state[filter] = this.filters.state[filter].filter(
			(filterItem: any) => {
				return filterItem !== state;
			}
		);
	}

	getFilterState(filter: string): string[] {
		if (!this.hasFilter(filter))
			throw Featurize.errorFilterDoesNotExist(filter);

		return this.filters.state[filter];
	}

	hasFilter(filter: string): boolean {
		return this.filters.state.hasOwnProperty(filter);
	}

	hasFilterState(filter: string, state: string): boolean {
		return this.filters.state[filter].includes(state);
	}

	getFeatures(section: string): FeatureInterface[] {
		const featuresForSection = this.features.filter(feature => {
			return (
				feature.sections.includes(section) &&
				feature.states.includes(this.state)
			);
		});

		return filterFeatures(featuresForSection, this.filters.state);
	}

	static errorFilterDoesNotExist(filter: string): Error {
		return new Error(`${filter} filter does not exist.`);
	}
}

export const featurize = ({ features, filters, env }: FeaturizeInterface) => {
	const instance = new Featurize(features, filters, env);
	Object.defineProperty(instance, 'Featurize', {
		writable: false,
		configurable: false,
		value: Featurize
	});
	return instance;
};

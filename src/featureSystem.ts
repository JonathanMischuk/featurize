import {
	FeatureSystemInterface,
	FiltersInterface,
	FeatureInterface
} from './interfaces';

import { filterFeatures } from './utils/filterFeatures';
import { emitter } from './emitter';

export class FeatureSystem {
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

	setFilterState(filter: string, state: string): void {
		this.filters.states[filter] = !this.filters.states[filter].includes(
			state
		)
			? [...this.filters.states[filter], state]
			: [...this.filters.states[filter]];

		emitter.emit('update');
	}

	removeFilterState(filter: string, state: string): void {
		this.filters.states[filter] = this.filters.states[filter].filter(
			(filterItem: any) => {
				return filterItem !== state;
			}
		);

		emitter.emit('update');
	}

	getFilterState(filter: string): string[] {
		return this.filters.states[filter];
	}

	getFeatures(section: string): FeatureInterface[] {
		const featuresForSection = this.features.filter(feature => {
			return feature.sections.includes(section);
		});

		return filterFeatures(featuresForSection, this.filters.states);
	}
}

export const featureSystem = ({
	features,
	filters,
	env
}: FeatureSystemInterface) => {
	return new FeatureSystem(features, filters, env);
};

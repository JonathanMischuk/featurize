import {
	FeatureSystemInterface,
	FiltersInterface,
	FeatureInterface
} from './interfaces';
import { filterFeatures } from './utils/filterFeatures';

class FeatureSystem {
	features: FeatureInterface[];
	filters: FiltersInterface;

	constructor(features: FeatureInterface[], filters: FiltersInterface) {
		this.features = features;
		this.filters = filters;
	}

	setFilterState(filter: string, filterState: string): void {}

	removeFeatureState(filter: string, filterState: string): void {}

	getFilterState(filterState: string): string[] {
		return [];
	}

	getFeatures(section: string): FeatureInterface[] {
		const featuresForSection = this.features.filter(feature => {
			return feature.sections.includes(section);
		});

		return filterFeatures({
			features: featuresForSection,
			filters: this.filters
		});
	}
}

export const featureSystem = ({
	features,
	filters
}: FeatureSystemInterface) => {
	return new FeatureSystem(features, filters);
};

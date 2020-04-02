export interface FiltersInterface {
	options: { [key: string]: string[] };
	state: { [key: string]: string[] };
}

export interface FeatureInterface {
	component: () => any;
	versions: { [key: string]: string };
	states: string[];
	sections: string[];
	filters: { [key: string]: string[] };
	data?: { [key: string]: any };
}

export interface FeaturizeClassInterface {
	features: FeatureInterface[];
	filters: FiltersInterface;
	env: string;
	state: string;
	addFilterState: (filter: string, state: string) => void;
	removeFilterState: (filter: string, state: string) => void;
	getFilterState: (filter: string) => string[];
	getFeatures: (section: string) => FeatureInterface[];
}

export interface FilterFeaturesInterface {
	features: FeatureInterface[];
	filters: FiltersInterface;
}

export interface FeaturizeInterface {
	features: FeatureInterface[];
	filters: FiltersInterface;
	env: string;
}

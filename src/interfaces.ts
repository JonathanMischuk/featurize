export interface FiltersInterface {
	options: { [key: string]: string[] };
	states: { [key: string]: string[] };
}

export interface FeatureInterface {
	component: () => any;
	versions: { [key: string]: string };
	sections: string[];
	filters: { [key: string]: string[] };
	data?: { [key: string]: any };
}

export interface FilterFeaturesInterface {
	features: FeatureInterface[];
	filters: FiltersInterface;
}

export interface FeatureSystemInterface {
	features: FeatureInterface[];
	filters: FiltersInterface;
	env: string;
}

export interface FiltersInterface {
	options: { [key: string]: string[] };
	states: { [key: string]: string[] };
}

export interface FeatureInterface {
	name: string;
	sections: string[];
	filters: { [key: string]: string[] };
	data?: { [key: string]: any };
}

export interface FeatureSystemInterface {
	features: FeatureInterface[];
	filters: FiltersInterface;
}

export interface FeatureSystemProviderInterface extends FeatureSystemInterface {
	children: any;
}

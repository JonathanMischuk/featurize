export default {
	name: 'Feature01',
	component: (version?: string) => () => import(`./${version}`),
	versions: {
		dev: '1.0.0',
		prod: '1.0.0'
	},
	sections: ['flubber', 'anotherSection', 'hello'],
	filters: {
		roles: ['Admin'],
		permissions: ['level3']
	},
	data: {}
};

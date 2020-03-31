export default {
	versions: {
		dev: '1.0.0',
		prod: '1.0.0'
	},
	component: (version?: string) => () => import(`./${version}`),
	sections: ['flubber', 'anotherSection', 'hello'],
	filters: {
		roles: ['Admin'],
		permissions: ['level3']
	},
	data: {}
};
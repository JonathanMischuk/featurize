export default {
	name: 'Feature02',
	component: (version?: string) => () => import(`./${version}`),
	versions: {
		dev: '2.0.0',
		prod: '1.0.0'
	},
	sections: ['flubber'],
	filters: {
		roles: ['Admin'],
		permissions: ['level3']
	},
	data: {}
};

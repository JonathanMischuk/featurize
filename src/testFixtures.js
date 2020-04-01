exports.features = [
	{
		component: () => {},
		versions: {},
		sections: ['section01'],
		filters: { options: {}, states: {} },
		data: {}
	},
	{
		component: () => {},
		versions: {},
		sections: ['section02'],
		filters: { options: {}, states: {} },
		data: {}
	},
	{
		component: () => {},
		versions: {},
		sections: ['section03'],
		filters: { options: {}, states: {} },
		data: {}
	},
	{
		component: () => {},
		versions: {},
		sections: ['section03', 'section04'],
		filters: { options: {}, states: {} },
		data: {}
	}
];

exports.filters = {
	options: {
		roles: [
			'Full Demo',
			'Admin',
			'Executive',
			'Org Manager',
			'Account Category Manager',
			'Product Category Manager',
			'Advisor',
			'Advisor Less Compensation'
		],
		permissions: ['level1', 'level2', 'level3']
	},
	states: {
		roles: ['Admin'],
		permissions: ['level3']
	}
};

exports.DEV = 'dev';
exports.PROD = 'prod';

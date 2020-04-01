export {};

const { featureSystem, FeatureSystem } = require('./featureSystem');
const { features, filters, DEV, PROD } = require('./testFixtures');

describe('Unit tests for featureSystem.ts', () => {
	describe('initializing feature system', () => {
		const instance = featureSystem({
			features,
			filters,
			env: DEV
		});

		it('is correct instance type', () => {
			expect(instance).toBeInstanceOf(FeatureSystem);
		});

		it('has correct properties', () => {
			expect(instance.features).toBeDefined();
			expect(instance.features).toEqual(features);

			expect(instance.filters).toBeDefined();
			expect(instance.filters).toEqual(filters);

			expect(instance.env).toBeDefined();
			expect(instance.env).toEqual(DEV);

			expect(instance.getFeatures).toBeDefined();
			expect(typeof instance.getFeatures).toBe('function');

			expect(instance.setFilterState).toBeDefined();
			expect(typeof instance.setFilterState).toBe('function');

			expect(instance.removeFilterState).toBeDefined();
			expect(typeof instance.removeFilterState).toBe('function');

			expect(instance.getFilterState).toBeDefined();
			expect(typeof instance.getFilterState).toBe('function');
		});
	});

	describe('method usage', () => {
		it('getFeatures', () => {
			const instance = featureSystem({
				features,
				filters,
				env: DEV
			});

			expect(instance.getFeatures('section01')).toEqual([features[0]]);
			expect(instance.getFeatures('section02')).toEqual([features[1]]);
			expect(instance.getFeatures('section03')).toEqual([
				features[2],
				features[3]
			]);
			expect(instance.getFeatures('section04')).toEqual([features[3]]);
		});

		it('setFilterState', () => {
			const instance = featureSystem({
				features,
				filters,
				env: DEV
			});

			instance.setFilterState('roles', 'Admin');
			expect(instance.filters.states.roles).toEqual(['Admin']);

			instance.setFilterState('roles', 'Full Demo');
			expect(instance.filters.states.roles).toEqual([
				'Admin',
				'Full Demo'
			]);

			instance.setFilterState('roles', 'Executive');
			expect(instance.filters.states.roles).toEqual([
				'Admin',
				'Full Demo',
				'Executive'
			]);
		});

		it('removeFilterState', () => {
			const instance = featureSystem({
				features,
				filters,
				env: DEV
			});

			instance.removeFilterState('roles', 'Admin');
			expect(instance.filters.states.roles).toEqual([]);

			instance.removeFilterState('roles', 'Admin');
			expect(instance.filters.states.roles).toEqual([]);

			instance.removeFilterState('roles', 'Admin');
			expect(instance.filters.states.roles).toEqual([]);
		});

		it('getFilterState', () => {
			const instance = featureSystem({
				features,
				filters,
				env: DEV
			});

			expect(instance.getFilterState('roles')).toEqual(['Admin']);
			expect(instance.getFilterState('permissions')).toEqual(['level3']);
		});
	});
});

export {};

const { filterFeatures } = require('./filterFeatures');
const { features, filters } = require('../testFixtures');

describe('Unit tests for filterFeatures.ts', () => {
	it('returns correct features', () => {
		expect(filterFeatures(features, filters.states)).toEqual(features);
	});
});

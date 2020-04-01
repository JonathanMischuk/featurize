export {};

const { isTrue } = require('./isTrue');

describe('Unit tests for isTrue.ts', () => {
	it('returns true', () => {
		expect(isTrue(true)).toBe(true);
		expect(isTrue(Boolean(1))).toBe(true);
		expect(isTrue(Boolean('d'))).toBe(true);
	});

	it('returns false', () => {
		expect(isTrue(1)).toBe(false);
		expect(isTrue('flubber')).toBe(false);
		expect(isTrue({})).toBe(false);
		expect(isTrue([])).toBe(false);
		expect(isTrue(undefined)).toBe(false);
		expect(isTrue(null)).toBe(false);
		expect(isTrue(() => {})).toBe(false);
	});
});

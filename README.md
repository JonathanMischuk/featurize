Better Featurize documentation `hopefully` coming soon!

# Installation

```javascript
npm install --save featurize
```

# Usage

Import `featurize`:

```javascript
import { featurize } from 'featurize';
```

Create a `featurize` instance:

```javascript
import { features, filters, env } from './config';

const instance = featurize({
	features,
	filters,
	env
});
```

`featurize` accepts an object with 3 properties:

-   features: _an array of feature objects_
-   filters: _an object with an `options` and `state` property_
-   env: _a string value to represent which feature version to use_

## `feature` object:

This is a barebones feature object. There will be an explanation for each property below.

```javascript
const feature = {
	name: 'Feature',
	versions: {},
	states: [],
	sections: [],
	filters: {},
	data: {}
};
```

### `name`:

A unique `string` identifier for each particular feature

### `versions`:

An `object` containing custom properties that explicitly references the `env` property with custom properties each containing the value of a version `string`, for example:

```javascript
versions: {
    dev: '3.4.9',
    prod: '3.0.0'
}
```

or:

```javascript
versions: {
    someEnvName: 'beta',
    anotherEnvName: 'alpha'
}
```

Version properties and values can be whatever you like, they just need to be used in conjunction with the library's API (a full detailed usage example will be provided).

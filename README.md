# array-is-equal [![NPM version](https://img.shields.io/npm/v/array-is-equal.svg?style=flat)](https://www.npmjs.com/package/array-is-equal) [![NPM monthly downloads](https://img.shields.io/npm/dm/array-is-equal.svg?style=flat)](https://npmjs.org/package/array-is-equal) [![NPM total downloads](https://img.shields.io/npm/dt/array-is-equal.svg?style=flat)](https://npmjs.org/package/array-is-equal)

> Return even or odd to as result to a given number.


## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save array-is-equal
```

## Usage

Only works with arrays.

```js
const arrayIsEqual = require('array-is-equal');

console.log(arrayIsEqual([1, 'name', 3, false, '5', true], ['5', 'name', 3, true, 1, false])); //=> true
console.log(arrayIsEqual([1, 'name', 3, true, '5', 'first'], ['5', 'name', 3, true, 1, false])); //=> false

```

### Author

**Otavio Rampinelli**

* [LinkedIn Profile](https://linkedin.com/in/otarampinelli)
* [GitHub Profile](https://github.com/otarampinelli)
* [Twitter Profile](https://twitter.com/otarampinelli)

### License

Copyright © 2022, [Otavio Rampinelli](https://github.com/otarampinelli).
Released under the [MIT License](LICENSE).

***
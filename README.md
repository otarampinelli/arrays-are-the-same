# arrays-are-the-same [![NPM version](https://img.shields.io/npm/v/arrays-are-the-same.svg?style=flat)](https://www.npmjs.com/package/arrays-are-the-same) [![NPM monthly downloads](https://img.shields.io/npm/dm/arrays-are-the-same.svg?style=flat)](https://npmjs.org/package/arrays-are-the-same) [![NPM total downloads](https://img.shields.io/npm/dt/arrays-are-the-same.svg?style=flat)](https://npmjs.org/package/arrays-are-the-same)

> Return even or odd to as result to a given number.


## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save arrays-are-the-same
```

## Usage

Only works with arrays.

```js
const arraysAreTheSame = require('arrays-are-the-same');

console.log(arraysAreTheSame([1, 'name', 3, false, '5', true], ['5', 'name', 3, true, 1, false])); //=> true
console.log(arraysAreTheSame([1, 'name', 3, true, '5', 'first'], ['5', 'name', 3, true, 1, false])); //=> false

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
/* eslint-disable no-undef */
const arrayIsEqual = require("./index");

test("should insert two arrays and return true if are equals", () => {
  expect(arrayIsEqual([true, 1, false, 5, 2, 1], [true, 1, false, 5, 2, 1])).toEqual(true);
});

test("should insert two arrays and return false if are different", () => {
  expect(arrayIsEqual([true, 1, 'name', 5, 2, 1], [true, 1, false, 5, 2, 1])).toEqual(false);
});

test("Should return an error if is not an array", () => {
  expect(() => {
    arrayIsEqual([1, 2, 3], 'arroz');
  }).toThrow('Is only accepts array as parameter');
});
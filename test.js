/* eslint-disable no-undef */
const arraysAreTheSame = require("./index");

test("should insert two arrays and return true if are equals", () => {
  expect(arraysAreTheSame([true, 1, false, 5, 2, 1], [true, 1, false, 5, 2, 1])).toEqual(true);
});

test("should insert two arrays and return false if are different", () => {
  expect(arraysAreTheSame([true, 1, 'name', 5, 2, 1], [true, 1, false, 5, 2, 1])).toEqual(false);
});

test("Should return an error if is not an array", () => {
  expect(() => {
    arraysAreTheSame([1, 2, 3], 'arroz');
  }).toThrow('Is only accepts array as parameter');
});
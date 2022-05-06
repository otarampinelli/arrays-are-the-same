function same(firstArray, secondArray) {
  const firstArrayFrequency = {};
  const secondArrayFrequency = {};

  for (let val of firstArray) {
    firstArrayFrequency[val] = (firstArrayFrequency[val] || 0) + 1;
  }

  for (let val of secondArray) {
    secondArrayFrequency[val] = (secondArrayFrequency[val] || 0) + 1;
  }

  for (let key in firstArrayFrequency) {
    if (!(key in secondArrayFrequency)) {
      return false;
    }

    if (firstArrayFrequency[key] !== secondArrayFrequency[key]) {
      return false;
    }
  }

  return true;
}

console.log(same([true, 1, false, 5, 2, 1], [true, 1, false, 5, 2, 1]));

module.exports = function arraysAreTheSame(firstArray, secondArray) {
  const firstArrayFrequency = {};
  const secondArrayFrequency = {};


  if (!Array.isArray(firstArray) || !Array.isArray(secondArray)) {
    throw new Error('Only accepts array as parameter')
  }

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

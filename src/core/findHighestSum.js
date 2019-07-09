/**
 * @desc Multiplies integer pairs in an array of even length
 *
 * @param {array} integers - Array of integers (array must have even length)
 *
 * @returns {number} sum of multiplied and added integers
 */
function multiplyAndSumIntegers(integers) {
  let sum = 0;
  for (let i = 0; i < integers.length; i += 2) {
    sum += integers[i] * integers[i + 1];
  }

  return sum;
}

/**
 * @desc Finds the highest sum from the array by separating the negatives
 * positives and neutrals items, multiplies pairs of higher values in negatives
 * or integers together and multiplies out a single negative integer if one or more
 * zero(es) exists in the integers input.
 *
 * @param {array} intsArray - Array of integers
 *
 * @returns {number} sum - Value of the highest sum
 */
function findHighestSum(intsArray) {
  // No need going further if input array has no item
  if (!intsArray.length) {
    return 0;
  }

  // No need to perform further operations if input array has only one integer
  if (intsArray.length <= 1) {
    return intsArray[0];
  }

  const sortedIntsArray = intsArray.sort((prev, next) => prev - next);

  let sum = 0;
  let splitIndex;
  let neutralsCount = 0;
  const negatives = [];
  let positives = [];

  for (let i = 0; i < sortedIntsArray.length; i += 1) {
    const int = sortedIntsArray[i];

    if (int > 1) {
      splitIndex = i;
      break;
    }

    if (int === 1) {
      sum += int;
    }

    if (int === 0) {
      neutralsCount += 1;
    }

    if (int < 0) {
      negatives.unshift(int);
    }
  }

  positives = splitIndex !== undefined ? sortedIntsArray.slice(splitIndex) : [];

  if (negatives.length % 2 !== 0 && neutralsCount) {
    negatives.shift();
  }

  if (positives.length % 2 !== 0) {
    sum += positives.shift();
  }

  sum += multiplyAndSumIntegers(positives);
  sum += multiplyAndSumIntegers(negatives);

  return sum;
}

export default findHighestSum;

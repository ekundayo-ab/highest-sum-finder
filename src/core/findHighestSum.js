/**
 * @desc Negative integers have a lowering effect on the sum, so it
 * is ensured that they are multiplied by available zeroes to neutralize
 * their effect on the overall sum
 *
 * @param {number} neutralsCount - count of neutrals i.e zeroes
 * @param {number} negatives - array of negative integers
 *
 * @returns {number} - sum of multiplied and added negative integers
 */
function neutralizeAndSumNegatives(neutralsCount, negatives) {
  const _negatives = negatives;
  if (negatives.length > neutralsCount) {
    for (let i = 0; i < neutralsCount; i += 1) {
      _negatives.pop();
    }
  } else {
    _negatives.length = 0;
  }

  return _negatives.reduce((acc, next) => acc + next, 0);
}

/**
 * @desc Multiplies positives pair and add with 1 remnant in array if any.
 *
 * @param {array} positives - Array of only positive integers
 *
 * @returns {number} sum of multiplied and added positive integers
 */
function boostAndSumPositives(positives) {
  let sum = 0;

  if (positives.length % 2 !== 0) {
    sum += positives.shift();
  }

  for (let i = 0; i < positives.length; i += 2) {
    sum += positives[i] * positives[i + 1];
  }

  return sum;
}

/**
 * @desc Finds the highest sum from the array by separating the negatives
 * positives and neutrals items, multiplies positives with high values and
 * then multiplies negatives with available zeroes before adding resultant
 * values together.
 *
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

  sum += neutralizeAndSumNegatives(neutralsCount, negatives);
  sum += boostAndSumPositives(positives);

  return sum;
}

export default findHighestSum;

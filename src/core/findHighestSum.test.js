import findHighestSum from './findHighestSum';
import integers from '../mocks/integers.mock';

const {
  dataset1,
  dataset2,
  dataset3,
  dataset4,
  dataset5,
  dataset6,
  dataset7,
  dataset8,
  dataset9,
  dataset10,
} = integers;

test(`gives 27 as the highest sum for dataset 1 - [${dataset1}]`, () => {
  expect(findHighestSum(dataset1)).toEqual(27);
});

test(`gives 1 as the highest sum for dataset 2 - [${dataset2}]`, () => {
  expect(findHighestSum(dataset2)).toEqual(1);
});

test(`gives 2 as the highest sum for dataset 3 - [${dataset3}]`, () => {
  expect(findHighestSum(dataset3)).toEqual(2);
});

test(`gives 6005 as the highest sum for dataset 4 - [${dataset4}]`, () => {
  expect(findHighestSum(dataset4)).toEqual(6005);
});

test(`gives 388 as the highest sum for dataset 5 - [${dataset5}]`, () => {
  expect(findHighestSum(dataset5)).toEqual(388);
});

test(`gives 925 as the highest sum for dataset 6 - [${dataset6}]`, () => {
  expect(findHighestSum(dataset6)).toEqual(925);
});

test(`gives 9 as the highest sum for dataset 7 - [${dataset7}]`, () => {
  expect(findHighestSum(dataset7)).toEqual(9);
});

test(`gives 401 as the highest sum for dataset 8 - [${dataset8}]`, () => {
  expect(findHighestSum(dataset8)).toEqual(401);
});

test(`gives 62 as the highest sum for dataset 9 - [${dataset9}]`, () => {
  expect(findHighestSum(dataset8)).toEqual(401);
});

test(`gives 33 as the highest sum for dataset 10 - [${dataset10}]`, () => {
  expect(findHighestSum(dataset10)).toEqual(33);
});

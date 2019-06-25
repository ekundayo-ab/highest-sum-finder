export const stripAndFilterIntegers = (integers) => {
  const filteredIntegers = integers.split(',')
    .filter(int => int)
    .filter(int => !Number.isNaN(Number(int)))
    .map(int => Number(int));

  return filteredIntegers;
};

export default stripAndFilterIntegers;

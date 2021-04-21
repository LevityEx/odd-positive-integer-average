/**
 * Function which calculates the average of only odd positive numbers.
 */
export function averageOddPositiveIntegers(input: number[]): number {
  const odds: number[] = input.filter((num) => {
    return num % 2 == 1; // 1 remainder will mean odd number
  });
  const avg: number =
    odds.reduce((acc: number, cur: number): number => {
      return acc + cur; // accumulate total of odd nums
    }) / odds.length; // divide by length of odd nums
  return avg; // return a number
}

//input: array of items (hopefully positive integers)
//out: boolean value
//desc: tests if not number, if true tests if integer, if either of these fail, return false
export function isAllIntegers(input): boolean {
  if (input.length > 0) {
    let test = input.every((num) => {
      return !isNaN(num) && Number.isInteger(num);
    });
    return test;
  }
  return false;
}

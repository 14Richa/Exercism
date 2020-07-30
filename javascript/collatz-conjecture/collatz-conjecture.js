//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// to check num is postitive
// helper function.
const input = (num) => {
  if (num <= 0) return Error

};

export const steps = (num) => {
  input(num);
  let i = 0;
  while (num !== 1) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num * 3 + 1;
    }
    i++;
  }
  return i;
};


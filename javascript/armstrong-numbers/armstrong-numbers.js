//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = num => {
  const arr = num.toString().split("");
  let result = 0;
  arr.forEach((item, i) => {
    result += Math.pow(item, arr.length);
  });
  return result === num;
};
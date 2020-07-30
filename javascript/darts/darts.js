//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (x, y) => {
  if (x**2 + y**2 > 100) return 0;
  else if (x**2 + y**2 > 25) return 1;
  else if (x**2 + y**2 > 1) return 5;
  else return 10;
}

//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const colorCode = (color) => {
  return COLORS.indexOf(color);
};
const COLORS = ["black" , "brown" , "red" , "orange" , "yellow" , "green" , "blue" , "violet" , "grey" , "white"];
export const decodedValue = ([a,b]) => {
  return colorCode(a)*10 + colorCode(b)
};

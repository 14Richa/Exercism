
// eslint-disable-next-line import/prefer-default-export
export const isLeap = (year) => {
  // eslint-disable-next-line no-mixed-operators
  if (year % 4 === 0 && year % 100 || year % 400 === 0) {
    return true;
  }
  return false;
};


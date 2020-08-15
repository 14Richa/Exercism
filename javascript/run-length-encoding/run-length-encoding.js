//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (string) => {
  let encoded = ''
  let count = 0;
  for (let i = 1; i <= string.length; i++) {
    if (string[i] == string[i-1]) {
      count++
    } else {
      if (count === 0) {
        encoded = encoded + string[i-1]
      } else {
        count++
        encoded = encoded + count + string[i-1]
        count = 0
      }
    }
  }
  return encoded;

}


// console.log(encode('AABCDDKK'))

 export const decode = (str) => {
  let decode ='';
  let num = 0;
  for (let i = 0; i < str.length; i++) {
    if (Number(str[i])) {
      num = num + str[i];
    } else {
      if  (Number(num) > 1) {
        decode = decode + str[i].repeat(Number(num));
      } else {
        decode = decode + str[i];
      };
      num = 0;
    };
  };
  return decode;
};

// console.log(decode('12A5GN'))

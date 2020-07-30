//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(a, b, c) {
    this.a =a,
    this.b = b,
    this.c = c
  }
  //all sides are equal
  isEquilateral() {
    if(this.a === this.b && this.a === this.c) {
      return true;

    }
    else {
      return false;
    }
  }
  // two sides are equal
  isIsosceles() {
    if(this.a === this.b || this.a === this.c || this.b === this.c) {
    return true;
    }
    else {
      return false;
    }

  }
  //no sides are equal
  isScalene() {
    if(this.a !== this.b && this.a !== this.c && this.b !== this.c) {
      return true;
      }
    else {
      return false;
    }
  }
}

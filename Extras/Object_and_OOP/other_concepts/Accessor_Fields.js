/**
 * in JavaScript, Accessor fields allow us to manipulate something as if its an "actual property".
 */
class Color {
  constructor(r, g, b) {
    this.values = [r, g, b];
  }
  get red() {
    return this.values[0];
  }
  set red(value) {
    this.values[0] = value;
  }
}

const red = new Color(255, 0, 0);
red.red = 0;
console.log(red.red); // 0

/**
It looks as if the object has a property called red — but actually, no such property exists on the instance! There are only two methods, but they 
are prefixed with 'get' and 'set', which allows them to be manipulated as if they were properties.
If a field only has a getter but no setter, it will be effectively read-only.
*/

class Color {
  constructor(r, g, b) {
    this.values = [r, g, b];
  }
  get red() {
    return this.values[0];
  }
}

const red = new Color(255, 0, 0);
red.red = 0; //setting but wont set because the class is read-only (has the getter property only)
console.log(red.red); // 255

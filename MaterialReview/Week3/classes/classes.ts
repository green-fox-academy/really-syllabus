class Temperature {
  celsius: number;

  constructor(celsius: number) {
    this.celsius = celsius;
  }

  get fahrenheit(): number {
    return this.celsius * 1.8 + 32;
  }
  
  set fahrenheit(value: number) {
    this.celsius = (value - 32) / 1.8;
  }

  static fromFahrenheit(value: number): Temperature {
    return new Temperature((value - 32) / 1.8);
  }
}

let temp = new Temperature(22);
console.log(temp.fahrenheit);
// → 71.6

temp.fahrenheit = 86;
console.log(temp.celsius);
// → 30

let temp2 = Temperature.fromFahrenheit(86);
console.log(temp2.celsius);
// → 30
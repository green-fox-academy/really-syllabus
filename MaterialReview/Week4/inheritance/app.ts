class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    console.log(`Person constructor: ${this.name}, ${this.age}`);
  }
}

class Mentor extends Person {
  type: string;
  constructor(name: string, age: number, type: string) {
    super(name, age);
    this.type = type;
    console.log(`Mentor constructor: ${this.name}, ${this.age}, ${this.type}`);
  }
}

let p = new Person('Szirmi', 50);
let m = new Mentor('Bence', 60, 'mentor');
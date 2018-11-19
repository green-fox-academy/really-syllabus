import { Vehicle } from './vehicle';

export class Car extends Vehicle {
  protected engine: string;
  protected brand: string;
  constructor(color: string, engine: string, brand: string) {
    super(color);
    this.engine = engine;
    this.brand = brand;
    console.log(`Car Constructor : ${this.color}, ${this.engine}, ${this.brand}`);
  }

  getEngine() {
    return this.engine;
  }
}
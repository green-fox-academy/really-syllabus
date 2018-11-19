import { Car } from './Car';

export class Tesla extends Car {
  protected model: string;
  constructor(color: string,  engine: string, brand: string, model: string) {
    super(color, engine, brand);
    this.model = model;
  }

  getEngine() {
    return `${this.model} faszagyerek`;
  }
}
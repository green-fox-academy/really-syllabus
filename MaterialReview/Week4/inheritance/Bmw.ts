import { Car } from './Car';

export class BMW extends Car {
  protected personType: string;
  constructor(color: string, engine: string, brand: string, personType: string) {
    super(color, engine, brand);
    this.personType = personType;
  }

  getEngine() {
    return `${super.getEngine()} vagyok sokat fogyasztok`;
  }

  getColor() {
    return super.getColor();
  }
}
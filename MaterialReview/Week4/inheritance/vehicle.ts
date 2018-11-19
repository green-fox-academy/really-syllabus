export class Vehicle {
  protected color: string;
  constructor(color: string) {
    this.color = color;
  }

  getColor() {
    return this.color;
  }
}

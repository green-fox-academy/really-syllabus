class Car {
  protected id: number;
  protected licensePlate: string;
  protected manufacturYear: number;
  constructor(id: number, licensePlate: string, manufacturYear: number) {
    this.id = id;
    this.licensePlate = licensePlate;
    this.manufacturYear = manufacturYear;
  }
}
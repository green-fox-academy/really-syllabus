export class Car {
  private id: number;
  private licensePlate: string;
  private manufacturYear: number;
  private hasTicket: number;
  constructor(id: number, licensePlate: string, manufacturYear: number, hasTicket: number) {
    this.id = id;
    this.licensePlate = licensePlate;
    this.manufacturYear = manufacturYear;
    this.hasTicket = hasTicket;
  }

  getId(): number {
    return this.id;
  }

  getLicensePlate(): string {
    return this.licensePlate;
  }

  getManucaturerYear(): number {
    return this.manufacturYear;
  }

  getTicker(): number {
    return this.hasTicket;
  }

}
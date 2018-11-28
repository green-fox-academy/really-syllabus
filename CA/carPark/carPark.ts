'use strict';
import { Car } from './car';
import { readFromFile, writeToFile, appendToFile } from './file-io';

class CarPark {
  private myCars: Car[] = [];
  addCar(car: Car): void {
    this.myCars.push(car);
  }

  getMyCars(): Car[] {
    return this.myCars;
  }

  addCarToFile(car: Car) {
    appendToFile('cars.csv', `${car.getLicensePlate()},${car.getManucaturerYear()},${car.getTicker()}\r\n`);
  }
}

let myCar = new Car(12, 'ABCD-92', 1984, 1);
let myCarPark = new CarPark();
myCarPark.addCar(myCar);
myCarPark.addCarToFile(myCar);
console.log(myCarPark.getMyCars());
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

  removeCar(car: Car) {
    this.myCars.splice(this.myCars.indexOf(car), 1);
  }

  removeById(id: number) {
    this.myCars.forEach((e, i) => {
      if (e.getId() === id) {
        this.myCars.splice(i, 1);
      }
    });
    return this.myCars;
  }

  getOldest(fileName: string): string {
    let content = readFromFile(fileName);
    let array = [];
    if (content !== null) {
      content.split('\r\n').forEach(e => {
        array.push(e.split(','));
      });
      
      let index = 0;
      let smallest = 9999;
      array.forEach((e, i) => {
        console.log(e);
        if (e[1] < smallest) {
          index = i;
          smallest = e[1];
        }
      });
      return array[index][0];
    }
  }
}

let myCar = new Car(12, 'ABCD-92', 1984, 1);
let myCar1 = new Car(14, 'ABCD-92', 1984, 1);
let myCar2 = new Car(2, 'ABCD-92', 1984, 1);
let myCarPark = new CarPark();
myCarPark.addCar(myCar);
myCarPark.addCar(myCar1);
myCarPark.addCar(myCar2);
// console.log(myCarPark.removeCar(myCar));
// console.log(myCarPark.removeById(2));
// console.log(myCarPark.getMyCars());
// myCarPark.addCarToFile(myCar);

console.log(myCarPark.getOldest('cars.csv'));
import { Tesla } from './Tesla';
import { BMW } from './Bmw';
import { Car } from './Car';

let bmw = new BMW('red', 'benzines', 'bmw', 'faszagyerek');
let tesla = new Tesla('red',  'elektromos', 'tesla', 'elon musk');

console.log(bmw.getEngine());
console.log(tesla.getEngine());

const checkType = (car: Car) => {
  if (car instanceof BMW) {
    return 'szep auto vagyok'
  } else if (car instanceof Tesla) {
    return 'elektromos vagyok';
  }
}

console.log(checkType(tesla));
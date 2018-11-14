import { Dog } from "./Dog";
import { Person } from "./Person";

export class Shelter {
  name: string;
  private dogs: Dog[] = [];

  constructor(name: string) {
    this.name = name;
  }
  getDogs() {
    return this.dogs.slice(0);
  }

  addDog(dog: Dog) {
    this.dogs.push(dog);
  }

  adoptDog(person: Person, dogId: number) {
    const dog = this.getDogById(dogId);
    if (dog) {
      person.dog = dog;
      const index = this.dogs.indexOf(dog);
      this.dogs.splice(index, 1);
    } else {
      console.log("Sorry, there is no dog with the ID of: ", dogId);
    }
  }

  private getDogById(id: number): Dog {
    return this.dogs.find(function(dog: Dog) {
      return dog.id === id;
    });
  }
}

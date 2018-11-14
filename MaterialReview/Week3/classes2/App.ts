import { Shelter } from "./Shelter";
import { Dog } from "./Dog";
import { Person } from "./Person";

const shelter = new Shelter("Illatus út");

shelter.addDog(new Dog("Szaffi", "labrador"));
shelter.addDog(new Dog("Csinszka"));

const Peti = new Person("Peti");

console.log(`Peti's dog is ${Peti.dog}`);

console.log("Peti adopts a dog with the id of 1");
shelter.adoptDog(Peti, 1);

console.log(`Peti has dog called ${Peti.dog.name}`);

console.log("After the adoptation here are the dogs inside the shelter:");
console.log(shelter.getDogs());

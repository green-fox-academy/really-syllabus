import { Dog } from "./Dog";

export class Person {
    name: string;
    dog: Dog;

    constructor(name: string) {
        this.name = name;
    }
}
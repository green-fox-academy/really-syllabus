export class Dog {
    static idCounter = 1;

    id: number;
    name: string;
    breed: string;

    constructor(name:string, breed = "unknown") {
        this.id = Dog.idCounter;
        this.name = name;
        this.breed = breed;
        Dog.idCounter++;
    }
}
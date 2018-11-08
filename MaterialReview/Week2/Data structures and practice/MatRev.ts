let one = "aabbcc";
let two = "abc";

console.log(one.indexOf("b"));

one.replace("b", "d");

console.log("One", one);
console.log("Replaced", one.replace("b", "d"));

let dog = "A brown dog";

let words = dog.split(" ");
console.log(words);

console.log(
  dog
    .split("")
    .reverse()
    .join(" ")
);

let mark = "!";
console.log(`Hello world${mark}`);

let person = {
  firstName: "Jon",
  lastName: "Snow",
  age: 18
};

console.log(person.firstName);

console.log(Object.keys(person));

function fullNameGenerator({ lastName, firstName }: any): string {
  return `${firstName} ${lastName}`;
}

console.log(fullNameGenerator(person));

// Reference vs Primitive
//1.
let A = 10;
let B = A;

A = 20;

console.log(B);

//2.
let C = { value: 10 };
let D = C;

C.value = 20;
console.log(D.value);

//3.
let primitive = 10;

function incrementPrimitive(number: number): void {
  number++;
}

console.log(primitive);

//4.
let referenceType = { value: 10 };

function incrementReferenceType(object: any): void {
  object.value++;
}

incrementReferenceType(referenceType);

console.log(referenceType.value);

//5.
let anotherReference = { values: [1] };

function incrementAnotherReference(object: any): void {
  object.values[0] = 2;
}

incrementAnotherReference(anotherReference);

console.log(anotherReference.values[0]);

//6.
let thirdReference = { values: [1] };

function incrementThirdReference(object: any): void {
  let parameter = object.values[0];
  parameter++;
}

incrementThirdReference(thirdReference);

console.log(thirdReference.values[0]);

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

function fullNameGenerator({ lastName, firstName }): string {
  return `${firstName} ${lastName}`;
}

console.log(fullNameGenerator(person));

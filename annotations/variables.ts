let apples: number = 5;

let speed: string = "fast";
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;
let now: Date = new Date();

// array
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// classes

class Car {}
let car: Car = new Car();

//object literal

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// when to use annotations:

//1) Functions that returns the 'any' type
const json = '{"x":10, "y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);

// typescript can't predict what will come out of the function json.parse
// so it assigns the any type
// therefore you have to annotate coordinates variable with what it actually is

//2) when we declare a variable one line and initialize it later

let words = ["red", "green", "blue"];
let foundWord: boolean; // add in type annotation

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

//3) When we want a variable to have a type that cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false; // boolean OR number but one line

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i]; // trying to assign a number to variable that only accepts boolean
  }
}

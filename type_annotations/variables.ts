// Declaring a string variable
let movieTitle: string = 'Django Unchained';
movieTitle = 'Inglorious Basterds'; // reassigning movieTitle to a new string value

// Declaring a number variable
let movieYear: number = 2012;
movieYear = 2009; // reassigning movieYear to a new number value

// Declaring a boolean variable
let gameOver: boolean = true;
gameOver = false;

let nothing: null = null;
let foo: undefined = undefined;

// Type inference
let tvShow = 'Breaking Bad'; // TypeScript infers the type of tvShow to be string

// The any type (try to avoid using this)
let anyType: any = 'This is a string';
anyType = 10;
anyType = true;
anyType();
anyType.toUpperCase();

// When to use type annotations

// 1. Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // { x: 10, y: 20 }

// 2. When we declare the variable on one line and initialise it later

let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
	if (words[i] === 'green') {
		foundWord = true;
	}
	// words[i] === 'green' ? (foundWord = true) : (foundWord = undefined);
}

const movies = ['Arrival', 'Nocturnal Animals', 'La La Land'];
let foundMovie;

for (let movie of movies) {
	if (movie === 'Arrival') foundMovie = true;
}

// 3. Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] > 0) {
		numberAboveZero = numbers[i];
	}
}

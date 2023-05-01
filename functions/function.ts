function square(num) {
	return num * num;
}

square(2); // 4
square('asd'); // NaN
square(true); // NaN

const greet = (person: string) => `Hello , ${person}!`;

greet('Sonya Blade'); // Hello, Sonya Blade!

const doSomething = function (person: string, age: number, isFunny: boolean) {};

doSomething('ChickenFace', 23, true);

// Default parameters
const add = (x: number, y: number = 10) => x + y;

add(5); // 15

// Return type annotations
const subtract = (x: number, y: number): number => x - y;

const colors = ['red', 'yellow', 'green'];

// Anonymous function
colors.map((color) => color.toUpperCase());

// Void and never
function printTwice(msg: string): void {
	console.log(msg);
	console.log(msg);
} // void - function that returns nothing

// never - represents a function that never returns a value
const neverStop = (): never => {
	while (true) {
		console.log("I'm unstoppable!");
	}
}; // A function that doesn't finish executing

const giveError = (msg: string): never => {
	throw new Error(msg);
}; // A function that throws an error

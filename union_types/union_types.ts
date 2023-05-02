let age: number | string = 21;
age = 23;
age = '24';

type Point = {
	x: number;
	y: number;
};

type Loc = {
	lat: number;
	long: number;
};

let coordinates: Point | Loc = { x: 1, y: 34 };
coordinates = { lat: 321.213, long: 23.335 };

// Union types with functions

function printAge(age: number | string): void {
	console.log(`You're ${age} years old`);
}

printAge(23);
printAge('19');

function calculateTax(price: number | string, tax: number): number {
	// using type narrowing

	if (typeof price === 'string') {
		price = parseFloat(price.replace('$', ''));
	}
	return price * tax;
}

// Union types with arrays
const stuff: (number | string)[] = ['Hello', 1, 2, 3, 4, 5, 'Goodbye'];

const coords: (Point | Loc)[] = [];
coords.push({ lat: 329.22, long: 243 });
coords.push({ x: 14, y: 43 });

// Literal types
let zero: 0 = 0;

let hi: 'hi' = 'hi';

let mood: 'Happy' | 'Sad' = 'Happy';
mood = 'Happy';

type DayOfWeek =
	| 'Monday'
	| 'Tuesday'
	| 'Wednesday'
	| 'Thursday'
	| 'Friday'
	| 'Saturday'
	| 'Sunday';

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

function triple(value: string | number): string | number {
	if (typeof value === 'string') {
		return value.repeat(3);
	}

	return value * 3;
}

// Truthiness guard
const printLetters = (word?: string): void => {
	if (word) {
		for (let char of word) {
			console.log(char);
		}
	} else {
		console.log('You did not pass a word');
	}
};

// Equality narrowing
function someDemo(x: string | number, y: string | boolean) {
	if (x == y) {
		x.toUpperCase();
	}
}

someDemo(3, '3'); // Typescript doesn't catch this error

// Narrowing with the in operator

interface Movie {
	title: string;
	duration: number;
}
interface TVShow {
	title: string;
	numEpisodes: number;
	episodeDuration: number;
}

function getRuntime(media: Movie | TVShow) {
	if ('numEpisodes' in media) {
		return media.numEpisodes * media.episodeDuration;
	}
	return media.duration;
}

getRuntime({ title: 'Infinity War', duration: 230 });
getRuntime({ title: 'The Simpsons', numEpisodes: 300, episodeDuration: 30 });

// instanceof narrowing
const printFullDate = (date: string | Date) => {
	if (date instanceof Date) {
		console.log(date.toUTCString());
	} else {
		console.log(new Date(date).toUTCString());
	}
};

class User {
	constructor(public username: string) {}
}

class Company {
	constructor(public name: string) {}
}

function printName(entity: User | Company) {
	if (entity instanceof User) {
		console.log(entity.username);
	} else {
		console.log(entity.name);
	}
}

// type predicates

interface Cat {
	name: string;
	numLives: Number;
}

interface Dog {
	name: string;
	breed: string;
}

function isCat(animal: Cat | Dog): animal is Cat {
	return (animal as Cat).numLives !== undefined;
}

function makeNoise(animal: Cat | Dog): string {
	if (isCat(animal)) {
		return 'Meow';
	}
	return 'Woof';
}

// Discriminated unions
/* A common pattern in TS involves creating a literal property that is common across multiple types
   We can then narrow the type using that property*/
interface Bird {
	type: 'bird';
	flyingSpeed: number;
}

interface Horse {
	type: 'horse';
	runningSpeed: number;
}

type Animal = Bird | Horse;

const moveAnimal = (animal: Animal) => {
	let speed;
	switch (animal.type) {
		case 'bird':
			speed = animal.flyingSpeed;
			break;
		case 'horse':
			speed = animal.runningSpeed;
			break;

		default:
			const _exhaustiveCheck: never = animal;
			return _exhaustiveCheck;
	}
	return `Moving at speed ${speed}`;
};

moveAnimal({ type: 'bird', flyingSpeed: 100 });

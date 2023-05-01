function printName(person: { first: string; last: string }): void {
	console.log(`${person.first} ${person.last}`);
}

printName({ first: 'Mick', last: 'Jagger' });

let coordinate: { x: number; y: number } = {
	x: 10,
	y: 33
};

function randomCoordinate(): { x: number; y: number } {
	return { x: Math.random(), y: Math.random() };
}

// Type aliases
type Point = {
	x: number;
	y: number;
};

function doublePoint(point: Point): Point {
	return { x: point.x * 2, y: point.y * 2 };
}

// Nested objects
type Song = {
	title: string;
	artist: string;
	numStreams: number;
	credits: {
		producer: string;
		writer: string;
	};
};
const mySong = {
	title: 'go',
	artist: 'Cat Burns',
	numStreams: 12224344,
	credits: {
		producer: 'JONAH',
		writer: 'James Naples'
	}
};

function calculatePayout(song: Song): number {
	return song.numStreams * 0.003;
}

function printSong(song: Song): void {
	console.log(`${song.title} - ${song.artist}`);
}

const earnings = calculatePayout(mySong);
console.log(earnings);

printSong(mySong);

const profile = {
	name: 'alex',
	age: 20,
	coords: {
		lat: 0,
		lng: 15
	},
	setAge(age: number): void {
		this.age = age;
	}
};

// Optional properties
type Person = {
	name: string;
	age: number;
	job: string;
	favoriteMove?: string;
};

const newPerson: Person = {
	name: 'Percy',
	age: 16,
	job: 'Demi-god'
};

// Readonly keyword
type User = {
	readonly id: number; // id property cannot be changed
	username: string;
};

const user: User = {
	id: 3024620,
	username: 'DogMan'
};

// Intersection types
type Circle = {
	radius: number;
};

type Colorful = {
	color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
	radius: 5,
	color: 'yellow'
};

type Cat = {
	numLives: number;
};

type Dog = {
	breed: string;
};

type CatDog = Cat &
	Dog & {
		age: number;
	};

const christy: CatDog = {
	numLives: 7,
	breed: 'Husky',
	age: 9
};

/* Generics allow us to define reusable functions and classes 
that work with multiple types rather than a single type */

// Built-in generics
const nums: Array<number> = [1, 2, 3, 4, 5];
const rainbow: Array<string> = [
	'red',
	'orange',
	'green',
	'brown',
	'indigo',
	'violet'
];
const btn = document.querySelector<HTMLButtonElement>('.btn');

const promise: Promise<string> = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('This is done!');
	}, 2000);
});

promise.then((data) => {
	console.log(data.split(' '));
});

// Creating our own generics
function stringIdentity(item: string): string {
	return item;
}
function numberIdentity(item: number): number {
	return item;
}
function booleanIdentity(item: boolean): boolean {
	return item;
}

// Generic of the above functions
function identity<T>(item: T): T {
	return item;
}
identity<string>('Hello');

identity<number>(3);

identity<boolean>(true);

type Chicken = {
	name: string;
	breed: string;
};
identity<Chicken>({ name: 'Penny', breed: 'Silkie' });

function getRandomNumberElement<T>(list: T[]): T {
	const randIndex = Math.floor(Math.random() * list.length);
	return list[randIndex];
}

getRandomNumberElement<string>(['a', 'b', 'c', 'd']);
getRandomNumberElement<number>([3, 42, 11, 30]);

/* Generics with multiple types 
 Type constraints */
const merge = <T extends object, U extends object>(
	object1: T,
	object2: U
): T & U => {
	return {
		...object1,
		...object2
	};
};

merge({ name: 'Michael' }, { pets: ['June', 'Zeke'] });

interface Lengthy {
	length: number;
}

const printDoubleLength = <T extends Lengthy>(thing: T): number =>
	thing.length * 2;

// keyof constraint
function extractAndConvert<T extends object, U extends keyof T>(
	obj: T,
	key: U
) {
	return 'Value: ' + obj[key];
}
extractAndConvert({ name: 'Alphonse' }, 'name');

// Default type parameters
function makeEmptyList<T = number>(): T[] {
	return [];
}

// Generic classes

interface Song {
	title: string;
	artist: string;
}

interface Video {
	title: string;
	creator: string;
	resolution: string;
}

class VideoPlaylist {
	public videos: Video[] = [];
}
class SongPlaylist {
	public songs: Song[] = [];
}

class Playlist<T> {
	public queue: T[] = [];

	add(el: T) {
		this.queue.push(el);
	}
}

const song = new Playlist<Song>();
const video = new Playlist<Video>();

//generic utility types
interface CourseGoal {
	title: string;
	description: string;
	completeUntil: Date;
}
const createCourseGoal = (
	title: string,
	description: string,
	date: Date
): CourseGoal => {
	let courseGoal: Partial<CourseGoal> = {};
	// partial makes all properties optional
	courseGoal.title = title;
	courseGoal.description = description;
	courseGoal.completeUntil = date;
	return courseGoal as CourseGoal;
};

const friends: Readonly<string[]> = ['Toshiro', 'Annie'];
// Readonly restricts us from altering the friends array

// generics with interfaces
interface GenericInterface<U> {
	value: U;
	getIdentity: () => U;
}

class IdentityClass<T> implements GenericInterface<T> {
	value: T;

	constructor(value: T) {
		this.value = value;
	}

	getIdentity(): T {
		return this.value;
	}
}
const myNumberClass = new IdentityClass<number>(1);
console.log(myNumberClass.getIdentity()); // 1

const myStringClass = new IdentityClass<string>('Hello!');
console.log(myStringClass.getIdentity()); // Hello!

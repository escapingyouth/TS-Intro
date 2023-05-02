// Interfaces allow us to describe the shape of objects and only objects

interface Point {
	x: number;
	y: number;
}

const pt: Point = { x: 3, y: 0.5 };

// Optional properties and readonly

interface Person {
	readonly id: number;
	first: string;
	last: string;
	nickname?: string;
}

const thomas: Person = {
	id: 3021123,
	first: 'Thomas',
	last: 'Hardy'
};

// Interface methods

interface User {
	id: number;
	username: string;
	password: string;
	sayHi: () => string; // sayHi():string
}

const newUser: User = {
	id: 213393,
	username: 'onlysayswoof',
	password: 'woof',
	sayHi() {
		return 'Hello';
	}
};

// Interface method parameters

interface Product {
	name: string;
	price: number;
	applyDiscount(discount: number): number;
}

const shoes: Product = {
	name: 'Blue Suede Shoes',
	price: 305,
	applyDiscount(amount: number) {
		const newPrice = this.price * (1 - amount);
		this.price = newPrice;
		return this.price;
	}
};

shoes.applyDiscount(0.4);

// Reopening interfaces

interface Dog {
	name: string;
	age: number;
}

interface Dog {
	breed: string;
	bark(): string;
}

const elton: Dog = {
	name: 'Elton',
	age: 2,
	breed: 'Rottweiler',
	bark(): string {
		return 'Woof Woof!';
	}
};

// Extending Interfaces

interface ServiceDog extends Dog {
	job: 'drug sniffer' | 'bomb detector' | 'guide dog';
}

const chewy: ServiceDog = {
	name: 'Chewy',
	age: 4.5,
	breed: 'Lab',
	job: 'guide dog',
	bark(): string {
		return 'Woof Woof!';
	}
};

// Multiple inheritance

interface Employee {
	readonly id: number;
	email: string;
}

interface Engineer extends Person, Employee {
	level: string;
	languages: string[];
}

const peter: Engineer = {
	id: 302921,
	first: 'Peter',
	last: 'Parker',
	email: 'peter@evilcorp.com',
	level: 'senior',
	languages: ['JS', 'Python']
};

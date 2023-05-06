class Player {
	public readonly first: string;
	public readonly last: string;
	protected _score = 0;

	constructor(first: string, last: string) {
		(this.first = first), (this.last = last);
	}

	private secretMethod(): void {
		console.log('HUSH');
	}
	get fullName(): string {
		return `${this.first} ${this.last}`;
	}
	get score(): number {
		return this.score;
	}
	set score(newScore: number) {
		if (newScore < 0) {
			throw new Error('Score cannot be negative');
		}

		this._score = newScore;
	}
}

const blue = new Player('Blue', 'Steele');

class SuperPlayer extends Player {
	public isAdmin: boolean = true;
	maxScore() {
		this._score = 99999;
	}
}

class Department {
	name: string;
	id: string;
	employees: string[] = [];

	constructor(name: string, id: string) {
		this.name = name;
		this.id = id;
	}
	describe(this: Department): void {
		console.log('Department: ' + this.name);
	}
	addEmployee(employee: string) {
		this.employees.push(employee);
	}
	printEmployeeInfo(): void {
		console.log(this.employees.length);
		console.log(this.employees);
	}

	// static methods are methods that can be accessed directly from the class without instantiation using the 'new' keyword
	static createEmployee(name: string) {
		return { name };
	}
}
class AccountingDepartment extends Department {
	private lastReport: string;

	constructor(id: string, private reports: string[]) {
		super('Accounting', id);
		this.lastReport = reports.slice(-1)[0];
	}

	// getters help us to access information from a private property outside of the class
	get mostRecentReport(): string {
		if (this.lastReport) {
			return this.lastReport;
		}
		throw new Error('No report found.');
	}

	// setters are used to add information to a private property outside of the class
	set mostRecentReport(value: string) {
		if (!value) {
			throw new Error('Please pass in a valid value!');
		}
		this.addReport(value);
	}
	// You can overwrite methods by redeclaring them like below or by using abstract classes
	addEmployee(name: string): void {
		if (name === 'Max') {
			return;
		}
		this.employees.push(name);
	}

	addReport(text: string): void {
		this.reports.push(text);
		this.lastReport = text;
	}

	printReports(): void {
		console.log(this.reports);
	}
}

const accounting = new Department('Accounting', '212');
accounting.describe(); // Department: Accounting

const accountingCopy = {
	describe: accounting.describe
};

// calling accountingCopy.describe() will result in an error
// because the accountingCopy object is not an instance of the class Department
// Hence you might need to add a name property

const accountingDepartment = new AccountingDepartment('20727630', [
	'Add new budget',
	'Revise quarter revenue'
]);

// setters and getters
accountingDepartment.mostRecentReport; // Revise quarter revenue
accountingDepartment.mostRecentReport = 'Review share distributions';

// static methods
const employee1 = Department.createEmployee('Michael');
console.log(employee1); // { name: 'Michael'}

class Automobile {
	constructor(public readonly color: string) {}
	// readonly implies the property cannot be altered

	public ignite(): void {
		console.log('chugga chugga');
		// public is the default modifier. It means that the property can be accessed from anywhere.
	}
	protected honk(): void {
		console.log('beep');
		// protected means that the property can only be accessed from inside the class or by a child class.
	}
}
const vehicle = new Automobile('red');
console.log(vehicle.color); // red

class Car extends Automobile {
	// extends is the keyword used to extend a class. It means that the class Car will have all the properties of the class Automobile.
	constructor(public wheels: number, color: string) {
		super(color);
	}

	private drive(): void {
		console.log('vroom');
		// private means that the property can only be called by other methods in this class.
	}

	startDrivingProcess(): void {
		this.drive();
		this.honk();
	}
}

const car = new Car(4, 'black');
car.startDrivingProcess();

// classes and interfaces

interface Colorful {
	color: string;
}
interface Printable {
	print: () => void;
}

class Bike implements Colorful {
	constructor(public color: string) {}
}

class Jacket implements Colorful, Printable {
	constructor(public brand: string, public color: string) {}

	print(): void {
		console.log(`${this.brand} - ${this.color}`);
	}
}

const jacket1 = new Jacket('Prada', 'black');

/* Abstract classes - abstract classes are classes that cannot be instantiated. 
 They are used as a base class for other classes to extend from. */

abstract class Employee {
	constructor(public first: string, public last: string) {}

	abstract getPay(): number;
}

class FullTimeEmployee extends Employee {
	constructor(
		public first: string,
		public last: string,
		private salary: number
	) {
		super(first, last);
	}
	getPay(): number {
		return this.salary;
	}
}
class PartTimeEmployee extends Employee {
	constructor(
		first: string,
		last: string,
		private hourlyRate: number,
		private hoursWorked: number
	) {
		super(first, last);
	}
	getPay(): number {
		return this.hourlyRate * this.hoursWorked;
	}
}

const betty = new FullTimeEmployee('Betty', 'White', 95000);
console.log(betty.getPay);

const bill = new PartTimeEmployee('Bill', 'Withers', 24, 12000);
console.log(bill.getPay());

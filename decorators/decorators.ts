// factory decorators
const Logger = (logString: string) => {
	return (constructor: Function) => {
		console.log(logString);
		console.log(constructor);
	};
};

const WithTemplate = (template: string, hookId: string) => {
	console.log('TEMPLATE FACTORY');
	return <T extends { new (...args: any[]): { name: string } }>(
		originalConstructor: T
	) => {
		// returning a new constructor function
		return class extends originalConstructor {
			constructor(..._: any[]) {
				super();
				console.log('Rendering template');
				const hookEl = document.getElementById(hookId);
				if (hookEl) {
					hookEl.innerHTML = template;
					hookEl.querySelector('h1')!.textContent = this.name;
				}
			}
		};
	};
};

// if you add a decorator to a class, it will be executed when the class is defined
@Logger('LOGGING - PERSON')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
	name = 'Connie';

	constructor() {
		console.log('Creating person object...');
	}
}

const per = new Person();

const Log = (target: any, propertyName: string | Symbol) => {
	console.log('Property decorator!');
	console.log(target, propertyName);
};
// if you add a decorator to a property, the decorator receives two arguments: the target object and the property name

const Log2 = (target: any, name: string, descriptor: PropertyDescriptor) => {
	console.log('Accessor decorator!');
	console.log(target);
	// target is the prototype of the object for instance methods and the constructor function for static methods
	console.log(name);
	// name is the name of the property
	console.log(descriptor);
	// A property descriptor is a simple JavaScript object associated with each property of the object
	// that contains information about that property such as its value and other meta - data.
};
const Log3 = (target: any, name: string, descriptor: PropertyDescriptor) => {
	console.log('Method decorator!');
	console.log(target);
	console.log(name);
	console.log(descriptor);
};
const Log4 = (target: any, name: string | Symbol, position: number) => {
	console.log('Parameter  decorator!');
	console.log(target);
	console.log(name);
	console.log(position);
	// position is the index of the parameter in the function
};

class Product {
	@Log
	title: string;

	@Log2
	set price(val: number) {
		if (val > 0) {
			this._price = val;
		} else {
			throw new Error('Invalid price - should be positive!');
		}
	}
	constructor(title: string, private _price: number) {
		this.title = title;
	}
	@Log3
	getPriceWithTax(@Log4 tax: number) {
		return this._price * (1 + tax);
	}
}
const prod1 = new Product('Book', 19);
console.log(prod1.getPriceWithTax(0.19));

// creating an auto bind decorator
const AutoBind = (
	_target: any,
	_methodName: string,
	descriptor: PropertyDescriptor
) => {
	const originalMethod = descriptor.value;
	const adjustedDescriptor: PropertyDescriptor = {
		configurable: true,
		enumerable: false,
		get() {
			const boundFn = originalMethod.bind(this);
			return boundFn;
		}
	};
	return adjustedDescriptor;
};
class Printer {
	message: string = 'This works!';
	@AutoBind
	showMessage() {
		console.log(this.message);
	}
}
const p = new Printer();

const button = document.querySelector('button')!;
button.addEventListener('click', p.showMessage);

// validation with decorators
interface ValidatorConfig {
	[property: string]: {
		[validatableProp: string]: string[]; // ['required', 'positive']
	};
}
const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
	registeredValidators[target.constructor.name] = {
		...registeredValidators[target.constructor.name],
		[propName]: [
			...(registeredValidators[target.constructor.name]?.[propName] ?? []),
			'required'
		]
	};
}

function PositiveNumber(target: any, propName: string) {
	registeredValidators[target.constructor.name] = {
		...registeredValidators[target.constructor.name],
		[propName]: [
			...(registeredValidators[target.constructor.name]?.[propName] ?? []),
			'positive'
		]
	};
}
function validate(obj: any) {
	const objValidatorConfig = registeredValidators[obj.constructor.name];
	if (!objValidatorConfig) {
		return true;
	}
	let isValid = true;
	for (const prop in objValidatorConfig) {
		for (const validator of objValidatorConfig[prop]) {
			switch (validator) {
				case 'required':
					isValid = isValid && !!obj[prop];
					break;
				case 'positive':
					isValid = isValid && obj[prop] > 0;
					break;
			}
		}
	}
	return isValid;
}
class Course {
	@Required
	title: string;
	@PositiveNumber
	price: number;
	constructor(title: string, price: number) {
		this.title = title;
		this.price = price;
	}
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const titleEl = <HTMLInputElement>document.getElementById('title')!;
	const priceEl = <HTMLInputElement>document.getElementById('price')!;

	const title = titleEl.value;
	const price = +priceEl.value;

	const createCourse = new Course(title, price);
	console.log(createCourse);
});

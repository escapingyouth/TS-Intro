class Dog {
	constructor(public name: string, public breed: string, public age: number) {}

	bark(): void {
		console.log('Woof!');
	}
}

export default Dog;

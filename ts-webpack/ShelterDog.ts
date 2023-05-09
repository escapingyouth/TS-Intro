import Dog from './Dog';

class ShelterDog extends Dog {
	constructor(
		name: string,
		breed: string,
		age: number,
		public shelter: string
	) {
		super(name, breed, age);
	}
}

export default ShelterDog;

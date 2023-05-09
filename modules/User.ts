// importing types
import type { Person } from './types';

export default class User implements Person {
	constructor(public username: string, public email: string) {}

	logout(): void {
		console.log(`${this.username} logs out!!`);
	}
}

export function userHelper() {
	console.log('User Helper');
}

import Dog from './Dog';
import ShelterDog from './ShelterDog';
import { add, multiply, divide } from './utlis';

const elton = new Dog('Elton', 'Aussie', 0.5);
elton.bark();

console.log(add(4, 5));
console.log(multiply(4, 5));
console.log(divide(4, 5));

const buff = new ShelterDog('Buffy', 'Pit', 0.5, 'Desert Springs');

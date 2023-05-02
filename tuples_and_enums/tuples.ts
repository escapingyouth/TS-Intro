// Tuples are arrays of fixed lengths and ordered with specific types - like super rigid arrays
let myTuple: [number, string];

myTuple = [10, 'TypeScript is fun'];

const colors: [number, number, number] = [256, 256, 256];

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, 'OK'];

const responses: HTTPResponse[] = [[404, 'Not Found']];

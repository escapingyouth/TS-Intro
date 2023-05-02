const activeUsers: string[] = ['Nick', 'Jack'];
activeUsers.push('Tony');

const ageList: number[] = [29, 62, 11, 3];

// Another way of annotating arrays
const bools: Array<boolean> = [true, false];

type Point = {
	x: number;
	y: number;
};

const coords: Point[] = [];
coords.push({ x: 3, y: 9 });
coords.push({ x: 32, y: 23 });

// Multidimensional arrays

const board: string[][] = [
	['X', '0', 'X'],
	['X', '0', 'X'],
	['X', '0', 'X']
];

const demo: number[][][] = [[[1]]];

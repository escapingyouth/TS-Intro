export const add = (a: number, b: number): number => a + b;

export const sample = <T>(arr: T[]): T => {
	const index = Math.floor(Math.random() * arr.length);
	return arr[index];
};

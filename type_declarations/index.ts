import axios from 'axios';
const getData = async () => {
	try {
		const response = await axios.get(
			'https://jsonplaceholder.typicode.com/users/1'
		);
		console.log('Wooo');
		console.log(response.data);
	} catch (e) {
		console.log('Error', e);
	}
};

getData();

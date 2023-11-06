import CoursesApi from './Axios';
import { User } from 'src/types/common/types';
export const CreateUser = async (newUser: User) => {
	try {
		const response = await CoursesApi.post('/register', newUser);
		const { successful } = response.data;

		return successful;
	} catch (error) {
		alert('Error: ' + error.response.data.errors);
	}
};

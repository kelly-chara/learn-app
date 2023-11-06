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

interface logindata {
	email: string;
	password: string;
}
interface apiResponse {
	successful: string;
	result: string;
	user: {
		name: string;
		email: string;
	};
}
export const LogUser = async (newUser: logindata): Promise<apiResponse> => {
	try {
		const response = await CoursesApi.post('/login', newUser);
		const { successful, result, user } = response.data;

		return { successful, result, user };
	} catch (error) {
		alert('Error: ' + error.response.data.errors);
	}
};

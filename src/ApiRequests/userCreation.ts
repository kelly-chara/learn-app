import CoursesApi from './Axios';
import { User } from 'src/types/common/types';

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

export const createUser = async (newUser: User): Promise<boolean> => {
	const response = await CoursesApi.post('/register', newUser);
	const { successful } = response.data;

	return successful;
};

export const logUser = async (newUser: logindata): Promise<apiResponse> => {
	const response = await CoursesApi.post('/login', newUser);
	const { successful, result, user } = response.data;

	return { successful, result, user };
};

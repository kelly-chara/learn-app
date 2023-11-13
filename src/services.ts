import axios, { AxiosRequestConfig } from 'axios';
import { logindata, apiResponse } from './types/services/servicesTypes';
import { User } from 'src/types/common/types';
import { CourseType, CourseTypeApiRequest } from 'src/store/courses/types';
import { AuthorType } from './store/authors/types';

const CoursesApi = axios.create({
	baseURL: 'http://localhost:4000',
});

// user services
export const createUser = async (newUser: User) => {
	const response = await CoursesApi.post('/register', newUser);
	const data = response.data;

	return data;
};

export const logUser = async (newUser: logindata): Promise<apiResponse> => {
	const response = await CoursesApi.post('/login', newUser);
	const data = response.data;

	return data;
};

export const logoutUser = async (token: string): Promise<apiResponse> => {
	// Create an AxiosRequestConfig object with headers containing the token
	const config: AxiosRequestConfig = {
		headers: {
			Authorization: token,
		},
	};

	// Make the HTTP request with the updated configuration
	const response = await CoursesApi.delete('/logout', config);

	// Extract data from the response
	const data = response.data;

	return data;
};

// Courses services

export const getAllCourses = async (): Promise<CourseType[]> => {
	const response = await CoursesApi.get('/courses/all');
	const data = response.data;

	return data.result;
};

export const addNewCourse = async (
	course: CourseTypeApiRequest,
	token: string
): Promise<CourseType> => {
	const config: AxiosRequestConfig = {
		headers: {
			Authorization: token,
		},
	};
	const response = await CoursesApi.post('/courses/add', course, config);
	const data = response.data;
	return data;
};

export const deleteCourse = async (courseId: string): Promise<apiResponse> => {
	const response = await CoursesApi.delete(`/courses/${courseId}`);
	const data = response.data;
	return data;
};
// Author services

export const getAllAuthors = async (): Promise<AuthorType[]> => {
	const response = await CoursesApi.get('/authors/all');
	const data = response.data;

	return data.result;
};

export const addNewAuthor = async (
	token: string,
	authorName: string
): Promise<AuthorType> => {
	const config: AxiosRequestConfig = {
		headers: {
			Authorization: token,
		},
	};
	const body = {
		name: authorName,
	};

	const response = await CoursesApi.post('/authors/add', body, config);

	const data = response.data;

	return data.result;
};

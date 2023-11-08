import axios from 'axios';
import { logindata, apiResponse } from './types/services/servicesTypes';
import { User } from 'src/types/common/types';
import { CourseType } from 'src/store/courses/types';

const CoursesApi = axios.create({
	baseURL: 'http://localhost:4000',
});

// user services
export const CreateUser = async (newUser: User) => {
	try {
		const response = await CoursesApi.post('/register', newUser);
		const { successful } = response.data;

		return successful;
	} catch (error) {
		alert('Error: ' + error.response.data.errors);
	}
};

export const LogUser = async (newUser: logindata): Promise<apiResponse> => {
	try {
		const response = await CoursesApi.post('/login', newUser);
		const { successful, result, user } = response.data;

		return { successful, result, user };
	} catch (error) {
		alert('Error: ' + error.response.data.errors);
	}
};

// Courses services

export const GetAllCourses = async (): Promise<apiResponse> => {
	try {
		const response = await CoursesApi.get('/courses/all');
		const { result } = response.data;

		return result;
	} catch (error) {
		alert('Error: ' + error.response.data.errors);
	}
};

export const AddNewCourse = async (
	author: CourseType
): Promise<apiResponse> => {
	try {
		const { id, ...newAuthor } = author;
		const response = await CoursesApi.post('/courses/add', newAuthor);
		const { successful } = response.data;

		return successful;
	} catch (error) {
		alert('Error: ' + error.response.data.errors);
	}
};

// Author services

export const getAllAuthors = async (): Promise<apiResponse> => {
	try {
		const response = await CoursesApi.get('/authors/all');
		const { result } = response.data;

		return result;
	} catch (error) {
		alert('Error: ' + error.response.data.errors);
	}
};

export const addNewAuthor = async (
	authorName: string
): Promise<apiResponse> => {
	try {
		const response = await CoursesApi.post('/authors/add', authorName);
		const { successful } = response.data;

		return successful;
	} catch (error) {
		alert('Error: ' + error.response.data.errors);
	}
};

import {
	getAllCourses,
	addNewCourse,
	deleteCourse,
	updateCourse,
} from 'src/services';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { CourseType, CourseTypeApiRequest } from './types';

interface UpdateCourseParams {
	newCourse: CourseTypeApiRequest;
	courseId: string;
}

export const fetchAllCourses = createAsyncThunk<CourseType[]>(
	'courses/fetchAllCourses',
	async (_, thunkAPI) => {
		try {
			const courses = await getAllCourses();
			return courses;
		} catch (error) {
			const typedError = error as Record<string, string>;
			thunkAPI.rejectWithValue(typedError);
		}
	}
);

export const addNewCourseThunk = createAsyncThunk<
	CourseType,
	CourseTypeApiRequest
>('courses/addNewCourse', async (newCourse: CourseTypeApiRequest, thunkAPI) => {
	try {
		// Perform the API call
		const token =
			localStorage.getItem('token')?.replace(/^"(.*)"$/, '$1') || '';

		const course = await addNewCourse(newCourse, token);

		return course;
	} catch (error) {
		const typedError = error as Record<string, string>;
		thunkAPI.rejectWithValue(typedError);
	}
});

export const updateCourseThunk = createAsyncThunk<
	CourseType,
	UpdateCourseParams
>(
	'courses/updateCourse',
	async ({ newCourse, courseId }: UpdateCourseParams, thunkAPI) => {
		try {
			// get token from storage
			const token =
				localStorage.getItem('token')?.replace(/^"(.*)"$/, '$1') || '';

			// make api call

			const course = await updateCourse(newCourse, token, courseId);

			return course;
		} catch (error) {
			const typedError = error as Record<string, string>;
			thunkAPI.rejectWithValue(typedError);
		}
	}
);

export const deleteCourseThunk = createAsyncThunk<string, string>(
	'courses/deleteCourse',
	async (courseId: string, thunkAPI) => {
		try {
			// Perform the API call
			const token =
				localStorage.getItem('token')?.replace(/^"(.*)"$/, '$1') || '';

			const course = await deleteCourse(courseId, token);

			return course;
		} catch (error) {
			const typedError = error as Record<string, string>;
			return thunkAPI.rejectWithValue(typedError);
		}
	}
);

import { getAllCourses, addNewCourse, deleteCourse } from 'src/services';
import {
	saveCoursesAction,
	addNewCourseAction,
	deleteCourseAction,
} from './actions';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { CourseType, CourseTypeApiRequest } from './types';

export const fetchAllCourses = createAsyncThunk<CourseType[]>(
	'courses/fetchAllCourses',
	async (_, { dispatch }) => {
		try {
			const courses = await getAllCourses();
			dispatch(saveCoursesAction(courses));
			return courses;
		} catch (error) {
			console.error('Error fetching courses:', error);
			throw error; // Rethrow the error to mark the thunk as rejected
		}
	}
);

export const addNewCourseThunk = createAsyncThunk(
	'courses/addNewCourse',
	async (newCourse: CourseTypeApiRequest, thunkAPI) => {
		try {
			// Perform the API call
			const token =
				localStorage.getItem('token').replace(/^"(.*)"$/, '$1') || '';

			const course = await addNewCourse(newCourse, token);
			thunkAPI.dispatch(addNewCourseAction(course));
			return course;
		} catch (error) {
			console.error('Error adding a new course:', error);
			throw error; // Rethrow the error to mark the thunk as rejected
		}
	}
);

export const deleteCourseThunk = createAsyncThunk(
	'courses/deleteCourse',
	async (courseId: string, thunkAPI) => {
		try {
			// Perform the API call
			const token =
				localStorage.getItem('token').replace(/^"(.*)"$/, '$1') || '';

			const course = await deleteCourse(courseId, token);
			thunkAPI.dispatch(deleteCourseAction(courseId));
			return course;
		} catch (error) {
			console.error('Error deleting a course:', error);
			throw error; // Rethrow the error to mark the thunk as rejected
		}
	}
);

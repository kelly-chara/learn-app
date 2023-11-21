import { createSlice } from '@reduxjs/toolkit';
import { coursesState } from './types';
import {
	fetchAllCourses,
	addNewCourseThunk,
	deleteCourseThunk,
	updateCourseThunk,
} from './thunk';

const initCoursesState: coursesState = {
	courses: [],
	errors: null,
};

const coursesSlice = createSlice({
	name: 'courses',
	initialState: initCoursesState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchAllCourses.fulfilled, (_, action) => {
				return {
					courses: action.payload,
					errors: {} as Record<string, string>,
				};
			})

			.addCase(fetchAllCourses.rejected, (_, action) => {
				return {
					courses: [],
					errors: action.payload as Record<string, string>,
				};
			})

			.addCase(addNewCourseThunk.fulfilled, (state, action) => {
				return {
					courses: [...state.courses, action.payload],
					errors: {} as Record<string, string>,
				};
			})

			.addCase(addNewCourseThunk.rejected, (_, action) => {
				return {
					courses: [],
					errors: action.payload,
				};
			})

			.addCase(updateCourseThunk.fulfilled, (_, action) => {
				return {
					courses: [action.payload],
					errors: {} as Record<string, string>,
				};
			})

			.addCase(updateCourseThunk.rejected, (_state, action) => {
				return {
					courses: [],
					errors: action.payload,
				};
			})

			.addCase(deleteCourseThunk.fulfilled, (state, action) => {
				return {
					courses: state.courses.filter(
						(course) => course.id !== action.payload
					),
					errors: {} as Record<string, string>,
				};
			})

			.addCase(deleteCourseThunk.rejected, (_state, action) => {
				return {
					courses: [],
					errors: action.payload,
				};
			});
	},
});

export default coursesSlice.reducer;

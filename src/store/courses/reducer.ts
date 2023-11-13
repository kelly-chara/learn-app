import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CourseType } from './types';
const initCoursesState = [] as CourseType[];
import { fetchAllCourses, addNewCourseThunk } from './thunk';

const coursesSlice = createSlice({
	name: 'courses',
	initialState: initCoursesState,
	reducers: {
		saveCourses: (_, action: PayloadAction<CourseType[]>) => {
			return action.payload;
		},
		addNewCourse: (state, action: PayloadAction<CourseType>) => {
			return [...state, action.payload];
		},
		deleteCourse: (state, action: PayloadAction<CourseType>) => {
			return [...state, action.payload];
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(
				fetchAllCourses.fulfilled,
				(_, action: PayloadAction<CourseType[]>) => {
					return action.payload; // Make sure to return a new array
				}
			)
			.addCase(
				addNewCourseThunk.fulfilled,
				(state, action: PayloadAction<CourseType>) => {
					return [...state, action.payload]; // Make sure to return a new array
				}
			);
	},
});

export default coursesSlice.reducer;

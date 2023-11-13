import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CourseType } from './types';
const initCoursesState = [] as CourseType[];
import { fetchAllCourses, addNewCourseThunk, deleteCourseThunk } from './thunk';

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
		deleteCourse: (state, action: PayloadAction<string>) => {
			return state.filter((course) => course.id !== action.payload);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(
				fetchAllCourses.fulfilled,
				(_, action: PayloadAction<CourseType[]>) => {
					return action.payload;
				}
			)
			.addCase(
				addNewCourseThunk.fulfilled,
				(state, action: PayloadAction<CourseType>) => {
					return [...state, action.payload];
				}
			)
			.addCase(
				deleteCourseThunk.fulfilled,
				(state, action: PayloadAction<string>) => {
					return state.filter((course) => course.id !== action.payload);
				}
			);
	},
});

export default coursesSlice.reducer;

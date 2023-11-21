import { RootState } from '../store/index';
export const getCoursesSelector = (state: RootState) =>
	state.coursesState.courses;
export const getAuthorsSelector = (state: RootState) =>
	state.authorsState.authors;
export const getUserSelector = (state: RootState) => state.user;

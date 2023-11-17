import { RootState } from 'src/types/store/rootTypes';

export const getCoursesSelector = (state: RootState) => state.courses;
export const getAuthorsSelector = (state: RootState) => state.authors;
export const getUserSelector = (state: RootState) => state.user;

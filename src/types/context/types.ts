import { Author, Course } from '../common/types';
import { ReactNode } from 'react';

export interface ContextProps {
	token: string;
	authors: Author[];
	chosenAuthors: Author[];
	courses: Course[];
	filteredCourses: Course[];
	setAuthors: (authors: Author[]) => void;
	setChosenAuthors: (authors: Author[]) => void;
	setLoginToken: (token: string) => void;
	setCourses: (courses: Course[]) => void;
	queryCourses: (query: string) => void;
}

export interface CoursesProviderProps {
	children: ReactNode;
}

export interface CoursesState {
	authors: Author[];
	chosenAuthors: Author[];
	courses: Course[];
	token: string;
}

export type CoursesActions =
	| { type: 'setChosenAuthors'; payload: Author[] }
	| { type: 'setAuthors'; payload: Author[] }
	| { type: 'setCourses'; payload: Course[] }
	| { type: 'setUserToken'; payload: string };

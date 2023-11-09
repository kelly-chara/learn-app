import { Author, Course } from '../common/types';
import { ReactNode } from 'react';

export interface ContextProps {
	token: string;
	authors: Author[];
	chosenAuthors: Author[];
	courses: Course[];
	filteredCourses: Course[];
	user: User;
	setAuthors: (authors: Author[]) => void;
	setChosenAuthors: (authors: Author[]) => void;
	setLoginToken: (token: string) => void;
	setCourses: (courses: Course[]) => void;
	setUser: (user: User) => void;
	queryCourses: (query: string) => void;
}
export interface User {
	name: string;
	email: string;
}
export interface CoursesProviderProps {
	children: ReactNode;
}

export interface CoursesState {
	authors: Author[];
	chosenAuthors: Author[];
	courses: Course[];
	token: string;
	user: User;
}

export type CoursesActions =
	| { type: 'setChosenAuthors'; payload: Author[] }
	| { type: 'setAuthors'; payload: Author[] }
	| { type: 'setCourses'; payload: Course[] }
	| { type: 'setUserToken'; payload: string }
	| { type: 'setUser'; payload: User };

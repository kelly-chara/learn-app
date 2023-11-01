import { Author, Course } from '../common/types';
import { ReactNode } from 'react';

export interface ContextProps {
	authors: Author[];
	chosenAuthors: Author[];
	courses: Course[];
	setAuthors: (authors: Author[]) => void;
	setChosenAuthors: (authors: Author[]) => void;
	setCourses: (courses: Course[]) => void;
}

export interface CoursesProviderProps {
	children: ReactNode;
}

export interface CoursesState {
	authors: Author[];
	chosenAuthors: Author[];
	courses: Course[];
}

export type CoursesActions =
	| { type: 'setChosenAuthors'; payload: Author[] }
	| { type: 'setAuthors'; payload: Author[] }
	| { type: 'setCourses'; payload: Course[] };

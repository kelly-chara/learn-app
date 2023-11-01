import { Author } from '../common/types';
import { ReactNode } from 'react';

export interface ContextProps {
	authors: Author[];
	chosenAuthors: Author[];
	setAuthors: (authors: Author[]) => void;
	setChosenAuthors: (authors: Author[]) => void;
}

export interface CoursesProviderProps {
	children: ReactNode;
}

export interface CoursesState {
	authors: Author[];
	chosenAuthors: Author[];
}

export type CoursesActions =
	| { type: 'setChosenAuthors'; payload: Author[] }
	| { type: 'setAuthors'; payload: Author[] };

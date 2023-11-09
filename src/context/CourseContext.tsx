import { createContext } from 'react';
import { ContextProps } from 'src/types/context/types';

export const CoursesContext = createContext<ContextProps | undefined>({
	authors: [],
	courses: [],
	chosenAuthors: [],
	filteredCourses: [],
	token: null,
	user: {
		name: null,
		email: null,
	},
	setAuthors: () => {
		throw new Error('setAuthors function must be overridden');
	},
	setChosenAuthors: () => {
		throw new Error('setChosenAuthors function must be overridden');
	},
	setCourses: () => {
		throw new Error('setCourses function must be overridden');
	},
	setLoginToken: () => {
		throw new Error('setLoginToken function must be overridden');
	},
	setUser: () => {
		throw new Error('setUser function must be overridden');
	},
	queryCourses: () => {
		throw new Error('queryCourses function must be overridden');
	},
});

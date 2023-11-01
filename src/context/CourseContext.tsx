import { createContext } from 'react';
import { mockedAuthorsList } from '../components/constants';
import { ContextProps } from 'src/types/context/types';

export const CoursesContext = createContext<ContextProps | undefined>({
	authors: mockedAuthorsList,
	chosenAuthors: null,
	setAuthors: () => {
		throw new Error('setAuthors function must be overridden');
	},
	setChosenAuthors: () => {
		throw new Error('setChosenAuthors function must be overridden');
	},
});
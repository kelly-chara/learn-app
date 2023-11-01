import React, { useReducer, useEffect } from 'react';
import { mockedAuthorsList } from '../components/constants';
import { coursesReducer } from './courseReducer';
import { Author } from 'src/types/common/types';
import { CoursesProviderProps, CoursesState } from 'src/types/context/types';
import { CoursesContext } from './CourseContext';

const Initial_State: CoursesState = {
	authors: mockedAuthorsList,
	chosenAuthors: null,
};

export const CoursesProvider: React.FC<CoursesProviderProps> = ({
	children,
}: CoursesProviderProps) => {
	const [state, dispatch] = useReducer(coursesReducer, Initial_State);

	// Read authors and chosenAuthors from local storage during initialization
	useEffect(() => {
		const savedAuthors = JSON.parse(
			localStorage.getItem('authors') || '[]'
		) as Author[];
		const savedChosenAuthors = JSON.parse(
			localStorage.getItem('chosenAuthors') || '[]'
		) as Author[];

		dispatch({ type: 'setAuthors', payload: savedAuthors });
		dispatch({ type: 'setChosenAuthors', payload: savedChosenAuthors });
	}, []);

	const setAuthors = (authors: Author[]) => {
		// Save authors to local storage
		localStorage.setItem('authors', JSON.stringify(authors));
		dispatch({ type: 'setAuthors', payload: authors });
	};

	const setChosenAuthors = (chosenAuthors: Author[]) => {
		// Save chosenAuthors to local storage
		localStorage.setItem('chosenAuthors', JSON.stringify(chosenAuthors));
		dispatch({ type: 'setChosenAuthors', payload: chosenAuthors });
	};

	return (
		<CoursesContext.Provider value={{ ...state, setAuthors, setChosenAuthors }}>
			{children}
		</CoursesContext.Provider>
	);
};

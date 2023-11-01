import React, { createContext, ReactNode, useReducer, useEffect } from 'react';
import { mockedAuthorsList, mockedCoursesList } from '../constants';
import { Author } from '../CreateCourse/components/Authors/Authors';
import { CoursesState, coursesReducer } from './courseReducer';

interface ContextProps {
	authors: Author[];
	chosenAuthors: Author[];
	setAuthors: (authors: Author[]) => void;
	setChosenAuthors: (authors: Author[]) => void;
}

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

interface CoursesProviderProps {
	children: ReactNode;
}

const Initial_State: CoursesState = {
	authors: mockedAuthorsList,
	chosenAuthors: null,
};

export const CoursesProvider: React.FC<CoursesProviderProps> = ({
	children,
}: CoursesProviderProps) => {
	const [state, dispatch] = useReducer(coursesReducer, Initial_State);

	useEffect(() => {
		// Save courses list to local storage
		localStorage.setItem('courses', JSON.stringify(mockedCoursesList));

		// Save authors list to local storage
		localStorage.setItem('authors', JSON.stringify(mockedAuthorsList));
	}, []);

	const setAuthors = (authors: Author[]) => {
		dispatch({ type: 'setAuthors', payload: authors });
	};

	const setChosenAuthors = (authors: Author[]) => {
		dispatch({ type: 'setAuthor', payload: authors });
	};

	return (
		<CoursesContext.Provider value={{ ...state, setAuthors, setChosenAuthors }}>
			{children}
		</CoursesContext.Provider>
	);
};

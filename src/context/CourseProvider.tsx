import React, { useReducer, useEffect, useState } from 'react';
import { mockedAuthorsList, mockedCoursesList } from '../components/constants';
import { coursesReducer } from './courseReducer';
import { Author, Course, User } from 'src/types/common/types';
import { CoursesProviderProps, CoursesState } from 'src/types/context/types';
import { CoursesContext } from './CourseContext';

const Initial_State: CoursesState = {
	authors: mockedAuthorsList,
	courses: mockedCoursesList,
	chosenAuthors: [],
	token: null,
	user: null,
};

export const CoursesProvider: React.FC<CoursesProviderProps> = ({
	children,
}: CoursesProviderProps) => {
	const [state, dispatch] = useReducer(coursesReducer, Initial_State);
	const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);

	// Read authors and courses from local storage during initialization
	useEffect(() => {
		const savedAuthors = JSON.parse(
			localStorage.getItem('authors') || '[]'
		) as Author[];
		const savedChosenAuthors = JSON.parse(
			localStorage.getItem('chosenAuthors') || '[]'
		) as Author[];
		const savedCourses = JSON.parse(
			localStorage.getItem('courses') || '[]'
		) as Course[];

		// Check if local storage items do not exist, then save initial state values
		if (!savedAuthors.length) {
			localStorage.setItem('authors', JSON.stringify(Initial_State.authors));
		}
		if (!savedChosenAuthors.length) {
			localStorage.setItem(
				'chosenAuthors',
				JSON.stringify(Initial_State.chosenAuthors)
			);
		}
		if (!savedCourses.length) {
			localStorage.setItem('courses', JSON.stringify(Initial_State.courses));
		}

		// Set the state from local storage
		dispatch({ type: 'setAuthors', payload: savedAuthors });
		dispatch({ type: 'setCourses', payload: savedCourses });
		dispatch({ type: 'setChosenAuthors', payload: savedChosenAuthors });
	}, []);

	const setAuthors = (authors: Author[]) => {
		// Save authors to local storage
		localStorage.setItem('authors', JSON.stringify(authors));
		dispatch({ type: 'setAuthors', payload: authors });
	};

	const setCourses = (courses: Course[]) => {
		// Save courses to local storage
		localStorage.setItem('courses', JSON.stringify(courses));
		dispatch({ type: 'setCourses', payload: courses });
	};

	const setChosenAuthors = (chosenAuthors: Author[]) => {
		// Save chosenAuthors to local storage
		localStorage.setItem('chosenAuthors', JSON.stringify(chosenAuthors));
		dispatch({ type: 'setChosenAuthors', payload: chosenAuthors });
	};

	const setLoginToken = (token: string) => {
		localStorage.setItem('token', JSON.stringify(token));
		dispatch({ type: 'setUserToken', payload: token });
	};

	const setUser = (user: User) => {
		dispatch({ type: 'setUser', payload: user });
	};

	const queryCourses = (query: string) => {
		const filteredCourses: Course[] = state.courses.filter((course) => {
			// Check if either id or title contains the query string
			return (
				course.id.toString().toLowerCase().includes(query) ||
				course.title.toLowerCase().includes(query)
			);
		});

		setFilteredCourses(filteredCourses);
	};
	return (
		<CoursesContext.Provider
			value={{
				...state,
				filteredCourses,
				setAuthors,
				setChosenAuthors,
				setCourses,
				setLoginToken,
				setUser,
				queryCourses,
			}}
		>
			{children}
		</CoursesContext.Provider>
	);
};

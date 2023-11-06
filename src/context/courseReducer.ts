import { CoursesState, CoursesActions } from 'src/types/context/types';

export const coursesReducer = (
	state: CoursesState,
	action: CoursesActions
): CoursesState => {
	const { type, payload } = action;
	switch (type) {
		case 'setChosenAuthors':
			return {
				...state,
				chosenAuthors: payload,
			};
		case 'setAuthors':
			return {
				...state,
				authors: payload,
			};
		case 'setCourses':
			return {
				...state,
				courses: payload,
			};
		case 'setUser':
			return {
				...state,
				user: payload,
			};
		case 'setUserToken':
			return {
				...state,
				token: payload,
			};

		default:
			return state;
	}
};

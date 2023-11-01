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

		default:
			return state;
	}
};

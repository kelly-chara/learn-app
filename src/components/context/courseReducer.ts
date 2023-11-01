import { Author } from '../CreateCourse/components/Authors/Authors';

type CoursesActions =
	| { type: 'setAuthor'; payload: Author[] }
	| { type: 'setAuthors'; payload: Author[] };
export interface CoursesState {
	authors: Author[];
	chosenAuthors: Author[];
}
export const coursesReducer = (
	state: CoursesState,
	action: CoursesActions
): CoursesState => {
	const { type, payload } = action;
	switch (type) {
		case 'setAuthor':
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

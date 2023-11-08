import { AuthorActionTypes, AuthorType } from './types';
const initAuthorsState = [] as AuthorType[];
import { AuthorsActions } from './actions';

export const authorsReducer = (
	state = initAuthorsState,
	action: AuthorsActions
) => {
	switch (action.type) {
		case AuthorActionTypes.SAVE_AUTHOR:
			return [...state, action.payload];

		case AuthorActionTypes.GET_ALL_AUTHORS:
			return [...state, action.payload];

		default:
			return state;
	}
};

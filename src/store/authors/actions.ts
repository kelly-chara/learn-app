import {
	AuthorActionTypes,
	AddNewAuthorAction,
	AuthorType,
	GetAllAuthorsAction,
} from './types';

// action creators

export const addNewAuthorAction = (author: AuthorType): AddNewAuthorAction => ({
	type: AuthorActionTypes.SAVE_AUTHOR,
	payload: author,
});

export const getAllAuthorsAction = (
	authors: AuthorType[]
): GetAllAuthorsAction => ({
	type: AuthorActionTypes.GET_ALL_AUTHORS,
	payload: authors,
});

export type AuthorsActions = AddNewAuthorAction | GetAllAuthorsAction;

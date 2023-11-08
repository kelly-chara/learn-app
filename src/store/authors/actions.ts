import {
	AuthorActionTypes,
	AddNewAuthorAction,
	AuthorType,
	GetAllAuthorsAction,
} from './types';

// action creators

export const addNewAuthorAction = (authorName: string): AddNewAuthorAction => ({
	type: AuthorActionTypes.SAVE_AUTHOR,
	payload: authorName,
});

export const getAllAuthorsAction = (
	authors: AuthorType[]
): GetAllAuthorsAction => ({
	type: AuthorActionTypes.GET_ALL_AUTHORS,
	payload: authors,
});

export type AuthorsActions = AddNewAuthorAction | GetAllAuthorsAction;

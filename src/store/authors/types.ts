export type AuthorType = {
	id: string;
	name: string;
};

export const enum AuthorActionTypes {
	SAVE_AUTHOR = 'SAVE_AUTHOR',
	GET_ALL_AUTHORS = 'GET_ALL_AUTHORS',
}

// Action interfaces
export interface AddNewAuthorAction {
	type: AuthorActionTypes.SAVE_AUTHOR;
	payload: AuthorType;
}

export interface GetAllAuthorsAction {
	type: AuthorActionTypes.GET_ALL_AUTHORS;
	payload: AuthorType[];
}

export interface authorsState {
	authors: AuthorType[];
	errors: Record<string, string>;
}

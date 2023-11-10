import { Dispatch } from 'redux';
import { getAllAuthors, addNewAuthor } from 'src/services';
import { getAllAuthorsAction, addNewAuthorAction } from './actions';

export const getAllAuthorsThunk = () => {
	return async function (dispatch: Dispatch) {
		const authors = await getAllAuthors();

		dispatch(getAllAuthorsAction(authors));
	};
};

export const saveNewAuthorThunk = (token: string, authorName: string) => {
	return async function (dispatch: Dispatch) {
		const newAuthor = await addNewAuthor(token, authorName);

		dispatch(addNewAuthorAction(newAuthor));
	};
};

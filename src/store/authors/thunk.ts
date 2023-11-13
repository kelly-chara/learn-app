import { getAllAuthors, addNewAuthor } from 'src/services';
import { getAllAuthorsAction, addNewAuthorAction } from './actions';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthorType } from './types';

export const fetchAllAuthors = createAsyncThunk<AuthorType[]>(
	'authors/fetchAllAuthors',
	async (_, { dispatch }) => {
		try {
			const authors = await getAllAuthors();

			dispatch(getAllAuthorsAction(authors));
			return authors;
		} catch (error) {
			console.error('Error fetching authors:', error);
			throw error; // Rethrow the error to mark the thunk as rejected
		}
	}
);

export const addNewAuthorThunk = createAsyncThunk(
	'authors/addNewAuthor',
	async (authorName: string, thunkAPI) => {
		try {
			const token =
				localStorage.getItem('token').replace(/^"(.*)"$/, '$1') || '';

			const author = await addNewAuthor(token, authorName);
			thunkAPI.dispatch(addNewAuthorAction(author));
			return author;
		} catch (error) {
			console.error('Error saving new author:', error);

			throw error; // Rethrow the error to mark the thunk as rejected
		}
	}
);

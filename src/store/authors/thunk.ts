import { getAllAuthors, addNewAuthor } from 'src/services';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthorType } from './types';

export const fetchAllAuthors = createAsyncThunk<AuthorType[]>(
	'authors/fetchAllAuthors',
	async (state, thunkAPI) => {
		try {
			const authors = await getAllAuthors();

			return authors;
		} catch (error) {
			const typedError = error as unknown as Record<string, string>;

			thunkAPI.rejectWithValue(typedError);
		}
	}
);

export const addNewAuthorThunk = createAsyncThunk<AuthorType, string>(
	'authors/addNewAuthor',
	async (authorName: string, thunkAPI) => {
		try {
			const token =
				localStorage.getItem('token')?.replace(/^"(.*)"$/, '$1') || '';

			const author = await addNewAuthor(token, authorName);

			return author;
		} catch (error) {
			const typedError = error as unknown as Record<string, string>;

			thunkAPI.rejectWithValue(typedError);
		}
	}
);

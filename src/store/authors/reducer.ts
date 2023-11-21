import { createSlice } from '@reduxjs/toolkit';
import { authorsState } from './types';
import { fetchAllAuthors, addNewAuthorThunk } from './thunk';

const initAuthorsState: authorsState = {
	authors: [],
	errors: null,
};

const authorsSlice = createSlice({
	name: 'authors',
	initialState: initAuthorsState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchAllAuthors.fulfilled, (_, action) => {
				return {
					authors: action.payload,
					errors: {} as Record<string, string>,
				};
			})

			.addCase(fetchAllAuthors.rejected, (_, action) => {
				return {
					authors: [],
					errors: action.payload as Record<string, string>,
				};
			})

			.addCase(addNewAuthorThunk.fulfilled, (state, action) => {
				return {
					authors: [...state.authors, action.payload],
					errors: {} as Record<string, string>,
				};
			})
			.addCase(addNewAuthorThunk.rejected, (state, action) => {
				return {
					authors: [],
					errors: action.payload as Record<string, string>,
				};
			});
	},
});

export default authorsSlice.reducer;

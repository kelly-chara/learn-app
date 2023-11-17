import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthorType } from './types';
import { fetchAllAuthors, addNewAuthorThunk } from './thunk';

const initAuthorsState = [] as AuthorType[];

const authorsSlice = createSlice({
	name: 'authors',
	initialState: initAuthorsState,
	reducers: {
		getAllAuthors: (_, action: PayloadAction<AuthorType[]>) => {
			return action.payload;
		},
		addNewAuthor: (state, action: PayloadAction<AuthorType>) => {
			return [...state, action.payload];
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(
				fetchAllAuthors.fulfilled,
				(_, action: PayloadAction<AuthorType[]>) => {
					return action.payload;
				}
			)
			.addCase(
				addNewAuthorThunk.fulfilled,
				(state, action: PayloadAction<AuthorType>) => {
					return [...state, action.payload];
				}
			);
	},
});

export default authorsSlice.reducer;

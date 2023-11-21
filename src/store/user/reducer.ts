import { createSlice } from '@reduxjs/toolkit';
import { UserState } from './types';
import { getCurrentUserThunk, logUserThunk, logoutUserThunk } from './thunk';

const initUserState: UserState = {
	user: {
		id: '',
		isAuth: false,
		name: '',
		email: '',
		token: '',
		role: '',
	},

	error: {},
};

const userSlice = createSlice({
	name: 'users',
	initialState: initUserState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(logUserThunk.fulfilled, (state, action) => {
				state.user.token = action.payload;
			})
			.addCase(logUserThunk.rejected, (state, action) => {
				return {
					...state,
					error: action.payload,
				};
			})
			.addCase(getCurrentUserThunk.fulfilled, (state, action) => {
				return {
					...state,
					user: action.payload,
				};
			})
			.addCase(getCurrentUserThunk.rejected, (state, action) => {
				return {
					...state,
					error: action.payload,
				};
			})
			.addCase(logoutUserThunk.fulfilled, (_) => {
				return initUserState;
			})
			.addCase(logoutUserThunk.rejected, (_, action) => {
				return {
					user: initUserState.user,
					error: action.payload,
				};
			});
	},
});

export default userSlice.reducer;

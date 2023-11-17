import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserType } from './types';
import { getCurrentUserThunk, logUserThunk, logoutUserThunk } from './thunk';

const initUserState: UserType = {
	isAuth: false,
	id: '',
	name: '',
	email: '',
	token: '',
	role: '',
};

const userSlice = createSlice({
	name: 'users',
	initialState: initUserState,
	reducers: {
		authUser: (state) => {
			return state;
		},
		getCurrentUser: (_, action: PayloadAction<UserType>) => {
			return action.payload;
		},
		logoutUser: (_) => {
			return initUserState;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(logUserThunk.fulfilled, (state) => {
				return state;
			})
			.addCase(
				getCurrentUserThunk.fulfilled,
				(_, action: PayloadAction<UserType>) => {
					return action.payload;
				}
			)
			.addCase(logoutUserThunk.fulfilled, (_) => {
				return initUserState;
			});
	},
});

export default userSlice.reducer;

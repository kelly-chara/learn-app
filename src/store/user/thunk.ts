import { logUser, logoutUser, getCurrentUser } from 'src/services';
import {
	authUserAction,
	logoutUserAction,
	getCurrentUserUserAction,
} from './actions';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserType } from './types';
import { Logindata } from 'src/types/services/servicesTypes';

export const getCurrentUserThunk = createAsyncThunk<UserType>(
	'user/getCurrentUser',
	async (_, { dispatch }) => {
		try {
			const token =
				localStorage.getItem('token').replace(/^"(.*)"$/, '$1') || '';
			const user = await getCurrentUser(token);
			console.log(user, 'the useeeeeeeeeeeeeer');
			dispatch(getCurrentUserUserAction(user));
			return user;
		} catch (error) {
			console.error('Error fetching current user:', error);
			throw error; // Rethrow the error to mark the thunk as rejected
		}
	}
);

export const logUserThunk = createAsyncThunk(
	'user/logUser',
	async (loginData: Logindata, thunkAPI) => {
		try {
			const token = await logUser(loginData);
			thunkAPI.dispatch(authUserAction(token));
			return token;
		} catch (error) {
			console.error('Error loggin user:', error);
			throw error; // Rethrow the error to mark the thunk as rejected
		}
	}
);

export const logoutUserThunk = createAsyncThunk(
	'user/logoutUser',
	async (_, { dispatch }) => {
		try {
			const token =
				localStorage.getItem('token').replace(/^"(.*)"$/, '$1') || '';
			const user = await logoutUser(token);
			dispatch(logoutUserAction());
			return user;
		} catch (error) {
			console.error('Error logging out user:', error);
			throw error; // Rethrow the error to mark the thunk as rejected
		}
	}
);

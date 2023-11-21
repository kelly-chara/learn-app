import { logUser, logoutUser, getCurrentUser } from 'src/services';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Logindata } from 'src/types/services/servicesTypes';

export const getCurrentUserThunk = createAsyncThunk(
	'user/getCurrentUser',
	async (_, { rejectWithValue }) => {
		try {
			const token =
				localStorage.getItem('token')?.replace(/^"(.*)"$/, '$1') || '';
			const user = await getCurrentUser(token);
			return user;
		} catch (error) {
			console.error('Error fetching current user:', error);
			const typedError = error as Record<string, string>;

			rejectWithValue(typedError);
		}
	}
);

export const logUserThunk = createAsyncThunk(
	'user/logUser',
	async (loginData: Logindata, { rejectWithValue }) => {
		try {
			const token = await logUser(loginData);
			return token;
		} catch (error) {
			const typedError = error as Record<string, string>;

			rejectWithValue(typedError);
		}
	}
);

export const logoutUserThunk = createAsyncThunk(
	'user/logoutUser',
	async (_, { rejectWithValue }) => {
		try {
			const token =
				localStorage.getItem('token')?.replace(/^"(.*)"$/, '$1') || '';
			const user = await logoutUser(token);
			return user;
		} catch (error) {
			console.error('Error logging out user:', error);
			const typedError = error as Record<string, string>;
			rejectWithValue(typedError);
		}
	}
);

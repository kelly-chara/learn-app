import {
	UserActionTypes,
	UserApiResponse,
	AuthUserAction,
	LogoutUserAction,
} from './types';

export const authUserAction = (user: UserApiResponse): AuthUserAction => {
	// Save the token to local storage
	localStorage.setItem('token', JSON.stringify(user.token));

	// Return the action object
	return {
		type: UserActionTypes.AUTH_USER,
		payload: user,
	};
};

export const logoutUserAction = (): LogoutUserAction => {
	localStorage.removeItem('token');

	return {
		type: UserActionTypes.LOGOUT_USER,
	};
};

export type UserActions = AuthUserAction | LogoutUserAction;

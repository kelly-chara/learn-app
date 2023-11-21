import {
	UserActionTypes,
	AuthUserAction,
	LogoutUserAction,
	GetCurrentUserAction,
	UserType,
} from './types';

export const authUserAction = (token: string): AuthUserAction => {
	// Save the token to local storage
	localStorage.setItem('token', JSON.stringify(token));

	// Return the action object
	return {
		type: UserActionTypes.AUTH_USER,
	};
};

export const getCurrentUserUserAction = (
	user: UserType
): GetCurrentUserAction => ({
	type: UserActionTypes.GET_CURRENT_USER,
	payload: user,
});

export const logoutUserAction = (): LogoutUserAction => {
	localStorage.removeItem('token');

	return {
		type: UserActionTypes.LOGOUT_USER,
	};
};

export type UserActions =
	| AuthUserAction
	| LogoutUserAction
	| GetCurrentUserAction;

import {
	UserActionTypes,
	UserType,
	AuthUserAction,
	LogoutUserAction,
} from './types';

export const authUser = (user: UserType): AuthUserAction => ({
	type: UserActionTypes.AUTH_USER,
	payload: user,
});

export const logoutUserAction = (): LogoutUserAction => ({
	type: UserActionTypes.LOGOUT_USER,
});

export type UserActions = AuthUserAction | LogoutUserAction;

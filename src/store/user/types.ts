export type UserType = {
	isAuth: boolean;
	id: string;
	name: string;
	email: string;
	token: string;
	role: string;
};

export type UserState = {
	user: UserType;
	error: any;
};

export type UserApiResponse = Omit<UserType, 'id' | 'role'>;

export const enum UserActionTypes {
	AUTH_USER = 'AUTH_USER',
	LOGOUT_USER = 'LOGOUT_USER',
	GET_CURRENT_USER = 'GET_CURRENT_USER',
}
export interface AuthUserAction {
	type: UserActionTypes.AUTH_USER;
}
export interface GetCurrentUserAction {
	type: UserActionTypes.GET_CURRENT_USER;
	payload: UserType;
}

export interface LogoutUserAction {
	type: UserActionTypes.LOGOUT_USER;
}

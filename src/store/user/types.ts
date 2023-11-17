export type UserType = {
	isAuth: boolean;
	id: string;
	name: string;
	email: string;
	token: string;
};

export type UserApiResponse = Omit<UserType, 'id'>;

export const enum UserActionTypes {
	AUTH_USER = 'AUTH_USER',
	LOGOUT_USER = 'LOGOUT_USER',
}
export interface AuthUserAction {
	type: UserActionTypes.AUTH_USER;
	payload: UserApiResponse;
}

export interface LogoutUserAction {
	type: UserActionTypes.LOGOUT_USER;
}

import { UserActionTypes, UserApiResponse, UserType } from './types';
const initCoursesState: UserType = {
	isAuth: false,
	id: '',
	name: '',
	email: '',
	token: '',
};
import { UserActions } from './actions';

export const userReducer = (
	state = initCoursesState,
	action: UserActions
): UserType | UserApiResponse => {
	switch (action.type) {
		case UserActionTypes.AUTH_USER:
			return action.payload;

		case UserActionTypes.LOGOUT_USER:
			return { ...initCoursesState };

		default:
			return state;
	}
};

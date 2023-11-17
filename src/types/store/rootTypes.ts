import { AuthorType } from 'src/store/authors/types';
import { CourseType } from 'src/store/courses/types';

export interface RootState {
	user: {
		isAuth: boolean;
		name: string;
		email: string;
		token: string;
	};
	courses: Array<CourseType>;
	authors: Array<AuthorType>;
}

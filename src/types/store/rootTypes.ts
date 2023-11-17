import { AuthorType } from 'src/store/authors/types';
import { CourseType } from 'src/store/courses/types';
import { UserType } from 'src/store/user/types';

export interface RootState {
	user: UserType;
	courses: Array<CourseType>;
	authors: Array<AuthorType>;
}

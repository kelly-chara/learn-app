import { Dispatch } from 'redux';
import { getAllCourses } from 'src/services';
import { saveCoursesAction } from './actions';

export const getAllCoursesThunk = () => {
	return async function (dispatch: Dispatch) {
		const courses = await getAllCourses();

		dispatch(saveCoursesAction(courses));
	};
};

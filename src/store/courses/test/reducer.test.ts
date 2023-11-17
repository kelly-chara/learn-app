import { mockedCoursesList } from 'src/components/constants';
import coursesReducer, { saveCourses } from '../reducer';

describe('courses reducer', () => {
	it('should return the initial state', () => {
		const initialState = [];
		const action = { type: undefined };

		const newState = coursesReducer(initialState, action);

		expect(newState).toEqual(initialState);
	});

	it('should handle SAVE_COURSES and return new state', () => {
		const initialState = [];
		const courses = mockedCoursesList;

		const newState = coursesReducer(initialState, saveCourses(courses));

		expect(newState).toEqual(courses);
	});
});

import {
	CoursesActionTypes,
	CourseType,
	AddNewCourse,
	SaveCourses,
	DeleteCourse,
} from './types';

// action creators

export const addNewCourseAction = (courseData: CourseType): AddNewCourse => ({
	type: CoursesActionTypes.ADD_COURSE,
	payload: courseData,
});
export const saveCoursesAction = (courseData: CourseType[]): SaveCourses => ({
	type: CoursesActionTypes.SAVE_COURSES,
	payload: courseData,
});

export const deleteCourseAction = (id: string): DeleteCourse => ({
	type: CoursesActionTypes.DELETE_COURSE,
	payload: id,
});

export type CoursesAction = SaveCourses | AddNewCourse | DeleteCourse;

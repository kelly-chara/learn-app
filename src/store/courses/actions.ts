import {
	CoursesActionTypes,
	CourseType,
	AddNewCourse,
	SaveCourses,
	DeleteCourse,
	UpdateCourse,
} from './types';

// action creators

export const addNewCourseAction = (courseData: CourseType): AddNewCourse => ({
	type: CoursesActionTypes.ADD_COURSE,
	payload: courseData,
});

export const updateCourseAction = (courseData: CourseType): UpdateCourse => ({
	type: CoursesActionTypes.UPDATE_COURSE,
	payload: courseData,
});

export const saveCoursesAction = (courses: CourseType[]): SaveCourses => ({
	type: CoursesActionTypes.SAVE_COURSES,
	payload: courses,
});

export const deleteCourseAction = (courseId: string): DeleteCourse => ({
	type: CoursesActionTypes.DELETE_COURSE,
	payload: courseId,
});

export type CoursesAction =
	| SaveCourses
	| AddNewCourse
	| DeleteCourse
	| UpdateCourse;

export type CourseType = {
	id: string;
	title: string;
	description: string;
	creationDate: string;
	duration: number;
	authors: string[];
};

export type CourseTypeApiRequest = {
	title: string;
	description: string;
	creationDate: string;
	duration: number;
	authors: string[];
};
export const enum CoursesActionTypes {
	SAVE_COURSES = 'SAVE_COURSES',
	ADD_COURSE = 'ADD_COURSE',
	UPDATE_COURSE = 'UPDATE_COURSE',
	DELETE_COURSE = 'DELETE_COURSES',
}

// Action interfaces
export interface AddNewCourse {
	type: CoursesActionTypes.ADD_COURSE;
	payload: CourseType;
}
export interface UpdateCourse {
	type: CoursesActionTypes.UPDATE_COURSE;
	payload: CourseType;
}

export interface DeleteCourse {
	type: CoursesActionTypes.DELETE_COURSE;
	payload: string;
}

export interface SaveCourses {
	type: CoursesActionTypes.SAVE_COURSES;
	payload: CourseType[];
}

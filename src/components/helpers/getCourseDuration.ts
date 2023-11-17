import { CourseType } from 'src/store/courses/types';

export const getCourseDuration = (timeInMinutes: number): string => {
	const minutes = timeInMinutes % 60;
	const hours = Math.floor(timeInMinutes / 60);
	return `${convertDigits(hours)}:${convertDigits(minutes)}`;
};
const convertDigits = (num: number): string => {
	return num.toString().padStart(2, '0');
};
export const getCourseById = (id: string, existingCourses: CourseType[]) => {
	const course = existingCourses?.find((course) => course.id === id);

	return course;
};

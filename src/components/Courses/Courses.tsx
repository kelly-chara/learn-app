import React, { FC } from 'react';
import { mockedCoursesList } from '../constants';
import {
	CourseCard,
	CourseCardProps,
} from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import Button from '../common/Button/Button';

const Courses: FC = () => {
	return (
		<>
			<div className='flex justify-between my-4'>
				<SearchBar />
				<Button buttonText='Add New Course' />
			</div>
			<div className=' flex flex-col gap-6 '>
				{mockedCoursesList.map((course: CourseCardProps) => (
					<CourseCard key={course.id} {...course} />
				))}
			</div>
		</>
	);
};
export default Courses;

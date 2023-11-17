import React from 'react';
import { CourseCard } from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import Button from '../common/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'src/store/hooks';
import { getCoursesSelector } from 'src/store/selectors';

const Courses = (): JSX.Element => {
	const courses = useAppSelector(getCoursesSelector);
	const navigate = useNavigate();

	return (
		<>
			<div className='flex flex-col gap-4 sm:flex-row justify-between my-4'>
				<SearchBar />
				<Button
					buttonText='Add New Course'
					handleClick={() => navigate('/courses/add')}
				/>
			</div>
			<div className=' flex flex-col gap-6 '>
				{courses.map((course) => (
					<CourseCard key={course.id} course={course} />
				))}
			</div>
		</>
	);
};
export default Courses;

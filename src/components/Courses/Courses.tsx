import React, { useEffect } from 'react';
import { CourseCard } from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import Button from '../common/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { getCoursesSelector } from 'src/store/selectors';
import { fetchAllCourses } from 'src/store/courses/thunk';

const Courses = (): JSX.Element => {
	const courses = useAppSelector(getCoursesSelector);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	useEffect(() => {
		const fetchData = async () => {
			try {
				await dispatch(fetchAllCourses());
			} catch (error) {
				console.error('Error fetching courses:', error);
			}
		};

		fetchData();
	}, []);

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
				{courses &&
					courses.map((course) => (
						<CourseCard key={course.id} course={course} />
					))}
			</div>
		</>
	);
};
export default Courses;

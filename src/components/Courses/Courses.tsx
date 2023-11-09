import React, { useEffect } from 'react';
import { CourseCard } from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import Button from '../common/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { GetAllCourses, getAllAuthors } from 'src/services';
import { saveCoursesAction } from 'src/store/courses/actions';
import { getAllAuthorsAction } from 'src/store/authors/actions';
import { RootState } from 'src/types/store/rootTypes';
const Courses = (): JSX.Element => {
	const courses = useSelector((state: RootState) => state.courses);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const _courses = await GetAllCourses();
				const _authors = await getAllAuthors();
				dispatch(saveCoursesAction(_courses));
				dispatch(getAllAuthorsAction(_authors));
			} catch (error) {
				console.error('Error fetching courses:', error);
			}
		};

		fetchData();
	}, [dispatch]);

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

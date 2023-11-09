import React, { useContext } from 'react';
import { CourseCard } from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import Button from '../common/Button/Button';
import { CoursesContext } from 'src/context/CourseContext';

interface CoursesProps {
	toggleView: () => void;
}

const Courses = ({ toggleView }: CoursesProps): JSX.Element => {
	const { courses } = useContext(CoursesContext);

	return (
		<>
			<div className='flex flex-col gap-4 sm:flex-row justify-between my-4'>
				<SearchBar />
				<Button buttonText='Add New Course' handleClick={toggleView} />
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

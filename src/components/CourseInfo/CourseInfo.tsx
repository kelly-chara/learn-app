import React, { FC } from 'react';
import Button from '../common/Button/Button';
import { useParams, useNavigate } from 'react-router-dom';
import {
	formatCreationDate,
	getCourseDuration,
	getAuthorsById,
	getCourseById,
} from '../helpers';
import { useAppSelector } from 'src/store/hooks';
import { getAuthorsSelector, getCoursesSelector } from 'src/store/selectors';
export const CourseInfo: FC = () => {
	const authorsState = useAppSelector(getAuthorsSelector);
	const coursesState = useAppSelector(getCoursesSelector);

	const { courseId } = useParams();
	const course = getCourseById(courseId, coursesState);

	const formatedAuthors = course.authors
		? getAuthorsById(course.authors, authorsState)
		: 'None';

	const navigate = useNavigate();
	return (
		<>
			<div className='flex flex-col justify-between h-full mt-16 pb-20 items-center basis-full gap-8 border'>
				<div className='flex flex-col w-full '>
					<Button
						buttonText='< Back to courses'
						className='self-start'
						handleClick={() => navigate('/courses')}
					/>

					<h3 className='sub-header self-center'>{course.title}</h3>
				</div>
				<div className='flex flex-row justify-between'>
					<div className='flex flex-col basis-6/12 px-2 py-8 content-between'>
						<p className='text-justify'>{course.description}</p>
					</div>
					<div className='flex flex-col text-center sm:text-justify justify-between basis-full sm:basis-4/12 p-2 gap-4'>
						<div className='flex flex-col gap-2 justify-center p-2'>
							<p className='font-bold'>
								Authors: <span>{formatedAuthors}</span>
							</p>
							<p className='font-bold'>
								Duration:{' '}
								<span>{getCourseDuration(course.duration)} hours</span>
							</p>
							<p className='font-bold'>
								Created: <span>{formatCreationDate(course.creationDate)}</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

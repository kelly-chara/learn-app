import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'src/components/common/Button/Button';
import {
	getAuthorsById,
	getCourseDuration,
	formatCreationDate,
} from 'src/components/helpers';
import { Course } from 'src/types/common/types';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { deleteCourseAction } from 'src/store/courses/actions';
import { getAuthorsSelector } from 'src/store/selectors';

export interface CourseCardProps {
	course: Course;
}

export const CourseCard: FC<CourseCardProps> = ({
	course: { authors, title, description, duration, creationDate, id },
}) => {
	const allAuthors = useAppSelector(getAuthorsSelector);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const formattedAuthors =
		authors && allAuthors ? getAuthorsById(authors, allAuthors).join(', ') : [];

	const goToCourseInfo = () => {
		navigate(id);
	};

	const handleCourseDeletion = async () => {
		dispatch(deleteCourseAction(id));
	};
	return (
		<div className='sm:centered-row justify-between items-center basis-full gap-8 border'>
			<div className='flex flex-col gap-8 basis-full px-2 py-8 content-between'>
				<h3 className='sub-header  block'>{title}</h3>

				<p className='text-justify'>{description}</p>
			</div>
			<div className='flex flex-col text-center sm:text-justify justify-between  p-2 gap-4'>
				<div className='flex flex-col gap-2 justify-center p-2'>
					<p className='font-bold'>
						Authors: <span>{formattedAuthors}</span>
					</p>
					<p className='font-bold'>
						Duration: <span>{getCourseDuration(duration)} hours</span>
					</p>
					<p className='font-bold'>
						Created: <span>{formatCreationDate(creationDate)}</span>
					</p>
				</div>

				<div className='flex flex-row gap-2'>
					<Button buttonText='🖉' />
					<Button buttonText='🗑️' handleClick={handleCourseDeletion} />

					<div>
						<Button
							buttonText='Show Course'
							className='flex-nowrap'
							handleClick={goToCourseInfo}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

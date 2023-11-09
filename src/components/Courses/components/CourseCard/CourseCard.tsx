import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'src/components/common/Button/Button';
import {
	getAuthorsById,
	getCourseDuration,
	formatCreationDate,
} from 'src/components/helpers';
import { Course } from 'src/types/common/types';
import { RootState } from 'src/types/store/rootTypes';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { deleteCourseAction } from 'src/store/courses/actions';
export interface CourseCardProps {
	course: Course;
}

export const CourseCard: FC<CourseCardProps> = ({
	course: { authors, title, description, duration, creationDate, id },
}) => {
	const allAuthors = useAppSelector((state: RootState) => state.authors);
	const dispatch = useAppDispatch();
	const formatedAuthors = getAuthorsById(authors, allAuthors);
	const navigate = useNavigate();
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
						Authors: <span>{formatedAuthors.join(', ')}</span>
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

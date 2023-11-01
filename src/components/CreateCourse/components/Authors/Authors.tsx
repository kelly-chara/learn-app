import React, { FC, useContext } from 'react';
import AuthorItem from '../AuthorItem/AuthorItem';
import { CoursesContext } from 'src/context/CourseContext';

export const Authors: FC = () => {
	const { authors, chosenAuthors } = useContext(CoursesContext);

	return (
		<div className='flex flex-col justify-center w-6/12 text-center p-6'>
			<div>
				<h4 className='sub-header'>Authors</h4>
				<div>
					{authors.map((author) => (
						<AuthorItem key={author.id} author={author} />
					))}
				</div>
			</div>
			<div>
				<h4 className='sub-header'>Course Authors</h4>
				<div>
					{chosenAuthors?.map((author) => <AuthorItem author={author} />)}
				</div>
			</div>
		</div>
	);
};
import React, { useState, FC } from 'react';
import AuthorItem from '../AuthorItem/AuthorItem';
import { mockedAuthorsList } from 'src/components/constants';

interface AuthorsProps {
	chosenAuthorName: string;
}

export const Authors: FC<AuthorsProps> = ({ chosenAuthorName }) => {
	return (
		<div className='flex flex-col justify-center w-6/12 text-center p-6'>
			<div>
				<h4 className='sub-header'>Authors</h4>
				<div>
					{mockedAuthorsList.map((author) => (
						<AuthorItem key={author.id} authorName={author.name} />
					))}
				</div>
			</div>
			<div>
				<h4 className='sub-header'>Course Authors</h4>
				<div>
					{chosenAuthorName && <AuthorItem authorName={chosenAuthorName} />}
				</div>
			</div>
		</div>
	);
};

import React, { FC } from 'react';
import AuthorItem from '../AuthorItem/AuthorItem';
import { useAppSelector } from 'src/store/hooks';
import { AuthorType } from 'src/store/authors/types';
import { getAuthorsSelector } from 'src/store/selectors';

interface AuthorProps {
	deleteAuthor: (author: AuthorType) => void;
	choseAuthor: (author: AuthorType) => void;
	chosenAuthors: AuthorType[];
}

export const Authors: FC<AuthorProps> = ({
	deleteAuthor,
	choseAuthor,
	chosenAuthors,
}) => {
	const authors = useAppSelector(getAuthorsSelector);

	return (
		<div className='flex flex-col sm:justify-center basis-full sm:basis-6/12 text-center sm:p-6'>
			<div>
				<h4 className='sub-header'>Authors</h4>
				<div>
					{authors.map((author) => (
						<AuthorItem
							isInChosenList={false}
							key={author.id}
							author={author}
							handleDeletion={deleteAuthor}
							addAuthor={choseAuthor}
						/>
					))}
				</div>
			</div>
			<div>
				<h4 className='sub-header'>Course Authors</h4>
				<div>
					{chosenAuthors &&
						chosenAuthors.map((author) => (
							<AuthorItem
								isInChosenList={true}
								key={author.id}
								author={author}
								handleDeletion={deleteAuthor}
								addAuthor={choseAuthor}
							/>
						))}
				</div>
			</div>
		</div>
	);
};

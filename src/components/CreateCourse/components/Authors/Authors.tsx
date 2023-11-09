import React, { FC } from 'react';
import AuthorItem from '../AuthorItem/AuthorItem';
import { Author } from 'src/types/common/types';
import { useAppSelector } from 'src/store/hooks';
export const Authors: FC = () => {
	/*const choseAuthor = (author: Author) => {
		// Check if the author is already in the chosenAuthors array
		const isAuthorAlreadyChosen = chosenAuthors.some(
			(chosenAuthor) => chosenAuthor.id === author.id
		);

		if (!isAuthorAlreadyChosen) {
			// If the author is not already chosen, add it to the chosenAuthors array
			const updatedChosenAuthors = [...chosenAuthors, author];
			setChosenAuthors(updatedChosenAuthors);
		}
	};

	const deleteAuthor = (author: Author) => {
		// Filter out the selected author from chosenAuthors array
		const updatedChosenAuthors = chosenAuthors.filter(
			(chosenAuthor) => chosenAuthor.id !== author.id
		);
		setChosenAuthors(updatedChosenAuthors);*/

	const authors = useAppSelector((state) => state.authors);

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
							//handleDeletion={deleteAuthor}
							//addAuthor={choseAuthor}
						/>
					))}
				</div>
			</div>
			<div>
				<h4 className='sub-header'>Course Authors</h4>
				<div>
					{/*chosenAuthors &&
						chosenAuthors.map((author) => (
							<AuthorItem
								isInChosenList={true}
								key={author.id}
								author={author}
								handleDeletion={deleteAuthor}
								addAuthor={choseAuthor}
							/>
						))*/}
				</div>
			</div>
		</div>
	);
};

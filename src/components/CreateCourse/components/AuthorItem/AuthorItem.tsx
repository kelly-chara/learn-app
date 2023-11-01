import React, { FC, useContext } from 'react';
import Button from 'src/components/common/Button/Button';
import { CoursesContext } from 'src/context/CourseContext';
import { AuthorItemProps } from 'src/types/common/types';

const AuthorItem: FC<AuthorItemProps> = ({ author, isInChosenList }) => {
	const { setChosenAuthors, chosenAuthors } = useContext(CoursesContext);

	const handleClick = () => {
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
	const handleDeletion = () => {
		// Filter out the selected author from chosenAuthors array
		const updatedChosenAuthors = chosenAuthors.filter(
			(chosenAuthor) => chosenAuthor.id !== author.id
		);
		setChosenAuthors(updatedChosenAuthors);
	};

	return (
		<div className='flex flex-col sm:flex-row justify-between px-12 my-4 content-center'>
			{isInChosenList && <Button buttonText='X' handleClick={handleDeletion} />}

			<span>{author.name}</span>
			<Button buttonText='Add author' handleClick={handleClick} />
		</div>
	);
};

export default AuthorItem;

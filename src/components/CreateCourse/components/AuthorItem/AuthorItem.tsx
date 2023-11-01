import React, { FC, useContext } from 'react';
import Button from 'src/components/common/Button/Button';
import { CoursesContext } from 'src/components/context/courseContext';
import { Author } from '../Authors/Authors';

interface AuthorItemProps {
	author: Author;
}

const AuthorItem: FC<AuthorItemProps> = ({ author }) => {
	const { setChosenAuthors, chosenAuthors } = useContext(CoursesContext);

	const handleClick = () => {
		//setChosenAuthors(author);
	};

	return (
		<div className='flex flex-row justify-between px-12 my-4 content-center'>
			<span>{author.name}</span>
			<Button buttonText='Add author' handleClick={handleClick} />
		</div>
	);
};

export default AuthorItem;

import React, { FC } from 'react';
import Button from 'src/components/common/Button/Button';
import { AuthorItemProps } from 'src/types/common/types';

const AuthorItem: FC<AuthorItemProps> = ({
	author,
	isInChosenList,
	handleDeletion,
	addAuthor,
}) => {
	return (
		<div className='flex flex-col sm:flex-row justify-between px-12 my-4 content-center'>
			{isInChosenList && (
				<Button buttonText='X' handleClick={() => handleDeletion(author)} />
			)}

			<span>{author.name}</span>
			<Button
				buttonText='Add author'
				type='button'
				handleClick={() => addAuthor(author)}
			/>
		</div>
	);
};

export default AuthorItem;

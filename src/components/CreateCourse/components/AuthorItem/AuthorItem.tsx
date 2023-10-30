import React, { FC } from 'react';
import Button from 'src/components/common/Button/Button';

interface AuthorItemProps {
	authorName: string;
}

const AuthorItem: FC<AuthorItemProps> = ({ authorName }) => {
	return (
		<div className='flex flex-row justify-around my-4 content-center'>
			<span>{authorName}</span>
			<Button buttonText='Add author' />
		</div>
	);
};

export default AuthorItem;

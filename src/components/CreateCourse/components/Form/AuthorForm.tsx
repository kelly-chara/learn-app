import React, { FC } from 'react';
import Input from 'src/components/common/Input/Input';
import Button from 'src/components/common/Button/Button';

import { useForm } from 'src/components/hooks/useForm';

export const AuthorForm: FC = () => {
	const { authorName, inputChange, resetForm } = useForm({
		authorName: '',
	});
	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		console.log('Form submitted:', authorName);
		resetForm();
	};
	return (
		<div className='place-self-center w-full'>
			<h4 className='sub-header text-center mb-4'>Add author</h4>
			<form className='flex flex-col  gap-8' onSubmit={handleSubmit}>
				<Input
					type='text'
					labelName='Author name'
					nameInput='author'
					placeholder='Enter author name...'
					value={authorName}
					onChangeHandler={inputChange}
				/>

				<div className='place-self-center'>
					<Button buttonText='Create Author' />
				</div>
			</form>
		</div>
	);
};

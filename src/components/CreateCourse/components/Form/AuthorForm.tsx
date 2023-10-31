import React, { FC } from 'react';
import Input from 'src/components/common/Input/Input';
import Button from 'src/components/common/Button/Button';
import * as Yup from 'yup';

import { useForm } from 'src/components/hooks/useForm';

const validationSchema = Yup.object().shape({
	authorName: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
});
export const AuthorForm: FC = () => {
	const { authorName, errors, inputChange, resetForm, validateForm } = useForm(
		{
			authorName: '',
		},
		validationSchema
	);
	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		const isValid = await validateForm(); // Validate the form
		if (isValid) {
			console.log('Form submitted:', authorName);
			resetForm();
		} else {
			console.log(errors);
		}
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

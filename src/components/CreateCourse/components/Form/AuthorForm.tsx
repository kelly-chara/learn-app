import React, { FC } from 'react';
import Input from 'src/components/common/Input/Input';
import Button from 'src/components/common/Button/Button';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'src/components/hooks/useForm';
import { useAppDispatch } from 'src/store/hooks';
import { addNewAuthorAction } from 'src/store/authors/actions';
import * as Yup from 'yup';

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
	const dispatch = useAppDispatch();
	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		const isValid = await validateForm(); // Validate the form
		const newAuthorId = uuidv4();
		const newAuthor = {
			id: newAuthorId,
			name: authorName,
		};

		if (isValid) {
			dispatch(addNewAuthorAction(newAuthor));
			resetForm();
		} else {
			console.log(errors);
		}
	};
	return (
		<div className='place-self-center w-full'>
			<h4 className='sub-header text-center mb-4'>Add author</h4>
			<div className='flex flex-col  gap-8'>
				<Input
					labelName='Author name'
					name='authorName'
					placeholder='Enter author name...'
					value={authorName}
					onChange={inputChange}
					errors={errors}
					tabIndex={4}
				/>

				<div className='place-self-center'>
					<Button buttonText='Create Author' handleClick={handleSubmit} />
				</div>
			</div>
		</div>
	);
};

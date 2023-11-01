import React, { FC, useState, useContext } from 'react';
import Input from 'src/components/common/Input/Input';
import Button from 'src/components/common/Button/Button';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'src/components/hooks/useForm';
import { mockedAuthorsList } from 'src/components/constants';
import { CoursesContext } from 'src/components/context/courseContext';

const validationSchema = Yup.object().shape({
	authorName: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
});
export const AuthorForm: FC = () => {
	//const [authors, setAuthors] = useState(mockedAuthorsList);
	const { authors, setAuthors, setChosenAuthors } = useContext(CoursesContext);
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
			const newAuthorId = uuidv4();
			const newAuthor = {
				id: newAuthorId,
				name: authorName,
			};

			const existingAuthors = JSON.parse(
				localStorage.getItem('authors') || '[]'
			);

			// Add the new author
			const updatedAuthors = [...existingAuthors, newAuthor];

			// Save the updated authors back to localStorage
			localStorage.setItem('authors', JSON.stringify(updatedAuthors));

			console.log('Form submitted:', authorName);
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
					type='text'
					labelName='Author name'
					nameInput='authorName'
					placeholder='Enter author name...'
					value={authorName}
					onChangeHandler={inputChange}
					errors={errors}
				/>

				<div className='place-self-center'>
					<Button buttonText='Create Author' handleClick={handleSubmit} />
				</div>
			</div>
		</div>
	);
};

import React, { FC } from 'react';
import { Authors } from './components/Authors/Authors';
import { FormHeader, AuthorForm, FormFooter } from './components/Form';
import { useForm } from '../hooks/useForm';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
	title: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	description: Yup.string()
		.min(2, 'The description is too short')
		.required('Field is required'),
	duration: Yup.number().required('Field is required'),
});
const CreateCourse: FC = () => {
	const {
		title,
		description,
		duration,
		errors,
		inputChange,
		resetForm,
		validateForm,
	} = useForm(
		{
			title: '',
			description: '',
			duration: null,
		},
		validationSchema
	);

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		const isValid = await validateForm(); // Validate the form
		if (isValid) {
			console.log('Form submitted:', title, description);
			resetForm();
		} else {
			console.log(errors);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<FormHeader
				title={title}
				description={description}
				inputChange={inputChange}
				errors={errors}
			/>
			<div className='border border-primary-550 flex flex-row justify-between content-center my-8'>
				<div className='flex flex-col justify-between  w-6/12 p-6 gap-8'>
					<AuthorForm />

					<FormFooter
						duration={duration?.toString()}
						inputChange={inputChange}
						errors={errors}
					/>
				</div>
				<Authors chosenAuthorName='mimi' />
			</div>
		</form>
	);
};
export default CreateCourse;

import React, { FC } from 'react';
import { useForm } from '../hooks/useForm';
import { Authors } from './components/Authors/Authors';
import { FormHeader } from './components/Form/FormHeader';
import { AuthorForm } from './components/Form/AuthorForm';
import { FormFooter } from './components/Form/FormFooter';

const CreateCourse: FC = () => {
	const { title, description, duration, inputChange, resetForm } = useForm({
		title: '',
		description: '',
		creationDate: '',
		duration: 0,
		authors: [],
	});

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		console.log('Form submitted:', title, description);
		resetForm();
	};

	return (
		<form onSubmit={handleSubmit}>
			<FormHeader
				title={title}
				description={description}
				inputChange={inputChange}
			/>
			<div className='border border-primary-550 flex flex-row justify-between content-center my-8'>
				<div className='flex flex-col justify-between  w-6/12 p-6 gap-8'>
					<AuthorForm />

					<FormFooter
						duration={duration.toString()}
						inputChange={inputChange}
					/>
				</div>
				<Authors chosenAuthorName='mimi' />
			</div>
		</form>
	);
};
export default CreateCourse;

import React, { FC } from 'react';
import Input from '../common/Input/Input';
import AuthorItem from './components/AuthorItem/AuthorItem';
import Button from '../common/Button/Button';
import { useForm } from '../hooks/useForm';

const CreateCourse: FC = () => {
	const { title, description, inputChange, resetForm } = useForm({
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
			<div>
				<div className='flex flex-row justify-between items-center my-5'>
					<Input
						type='text'
						labelName='Title'
						nameInput='title'
						placeholder='Enter title...'
						value={title}
						onChangeHandler={inputChange}
					/>
					<Button buttonText='Create course' />
				</div>

				<div>
					<Input
						type='textarea'
						labelName='Description'
						nameInput='description'
						placeholder='Enter description'
						value={description}
						onChangeHandler={inputChange}
					/>
				</div>
			</div>

			<div className='border border-red-400 flex flex-row justify-between content-center my-8'>
				<div className='flex flex-col justify-between  w-6/12 p-6 gap-8'>
					<div className='place-self-center w-full'>
						<h4 className='sub-header text-center mb-4'>Add author</h4>
						<form className='flex flex-col  gap-8'>
							<Input
								type='text'
								labelName='Author name'
								nameInput='author'
								placeholder='Enter author name...'
								value={title}
								onChangeHandler={inputChange}
							/>

							<div className='place-self-center'>
								<Button buttonText='Create Author' />
							</div>
						</form>
					</div>

					<div>
						<div className='flex flex-col gap-8'>
							<h4 className='sub-header text-center'>Duration</h4>
							<Input
								type='text'
								labelName='Duration'
								nameInput='duration'
								placeholder='Enter duration in minutes...'
								value={title}
								onChangeHandler={inputChange}
							/>
							<p>
								Duration: <span className='font-bold text-2xl'>02:02</span>{' '}
								hours
							</p>
						</div>
					</div>
				</div>
				<div className='flex flex-col justify-center  w-6/12 text-center p-6'>
					<div>
						<h4 className='sub-header'>Authors</h4>
						<div>
							<AuthorItem authorName='kyle' />
							<AuthorItem authorName='rory' />
							<AuthorItem authorName='mili' />
							<AuthorItem authorName='mini' />
						</div>
					</div>
					<div>
						<h4 className='sub-header'>Course Authors</h4>
						<div>
							<AuthorItem authorName='kyle' />
						</div>
					</div>
				</div>
			</div>
		</form>
	);
};
export default CreateCourse;

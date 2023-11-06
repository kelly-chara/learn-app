import React, { FC } from 'react';
import { useForm } from '../hooks/useForm';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { CreateUser } from 'src/Axios Request/userCreation';
const validationSchema = Yup.object().shape({
	name: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	email: Yup.string().email().required(),
	password: Yup.string().required(),
});
const Registration: FC = () => {
	const {
		name,
		email,
		password,
		errors,
		inputChange,
		validateForm,
		resetForm,
	} = useForm(
		{
			name: '',
			email: '',
			password: '',
		},
		validationSchema
	);
	const navigate = useNavigate();

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		const isValid = await validateForm(); // Validate the form
		if (isValid) {
			const newUser = {
				name,
				password,
				email,
			};

			const userWasCreated = CreateUser(newUser);

			if (userWasCreated) {
				resetForm();
				navigate('/login', { replace: true });
			}
		} else {
			console.log(errors);
		}
	};
	return (
		<div className='flex flex-col justify-center items-center gap-3 '>
			<h2 className='text-2xl text-center'>Registration</h2>
			<form
				onSubmit={handleSubmit}
				className='flex flex-col justify-center items-center gap-1 w-8/12'
			>
				<Input
					labelName='Name'
					onChange={inputChange}
					errors={errors}
					value={name}
					name='name'
					placeholder='Enter name'
				/>
				<Input
					labelName='Email'
					onChange={inputChange}
					errors={errors}
					value={email}
					name='email'
					placeholder='email@courses.com'
				/>
				<Input
					labelName='Password'
					onChange={inputChange}
					errors={errors}
					value={password}
					name='password'
					placeholder='Enter password'
					type='password'
				/>
				<Button buttonText='Registration' type='submit' />
			</form>

			<span>
				if you have an account you can{' '}
				<Link to={'/login'} className='text-blue-600'>
					Login
				</Link>
			</span>
		</div>
	);
};
export default Registration;

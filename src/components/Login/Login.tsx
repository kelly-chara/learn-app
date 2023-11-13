import React, { FC } from 'react';
import * as Yup from 'yup';
import { useForm } from '../hooks/useForm';
import { Input, Button, FormTemplate } from '../common';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'src/store/hooks';
import { logUserThunk, getCurrentUserThunk } from 'src/store/user/thunk';

const validationSchema = Yup.object().shape({
	email: Yup.string().email().required(),
	password: Yup.string().required(),
});

const Login: FC = () => {
	const { email, password, errors, inputChange, validateForm, resetForm } =
		useForm(
			{
				email: '',
				password: '',
			},
			validationSchema
		);

	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();

		const isValid = await validateForm(); // Validate the form

		if (isValid) {
			const userData = {
				password,
				email,
			};

			try {
				await dispatch(logUserThunk(userData));
				await dispatch(getCurrentUserThunk());
				resetForm();
				navigate('/courses', { replace: true });
			} catch (error) {
				console.error('Error occurred while logging in:', error);
			}
		}
	};

	return (
		<FormTemplate
			submitFunction={handleSubmit}
			action='Register'
			route='/registration'
			title='Login'
		>
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
			<Button buttonText='Login' type='submit' />
		</FormTemplate>
	);
};
export default Login;

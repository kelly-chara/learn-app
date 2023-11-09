import React, { FC } from 'react';
import { useForm } from '../hooks/useForm';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { createUser } from 'src/ApiRequests/userCreation';
import FormTemplate from '../common/Templates/Form';
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

			try {
				await createUser(newUser);
				resetForm();
				navigate('/login', { replace: true });
			} catch (error) {
				console.log(error);
			}
		}
	};
	return (
		<FormTemplate
			submitFunction={handleSubmit}
			action='Login'
			route='/login'
			title='Login'
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
		</FormTemplate>
	);
};
export default Registration;

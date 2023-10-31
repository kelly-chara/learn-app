import { ChangeEvent, useState } from 'react';
import * as yup from 'yup';

export const useForm = <T>(initValue: T, validationSchema: yup.Schema<T>) => {
	const [formState, setFormState] = useState(initValue);
	const [errors, setErrors] = useState({}); // State to hold validation errors

	const validateForm = async () => {
		try {
			await validationSchema.validate(formState, { abortEarly: false });
			setErrors({});
			return true; // Form is valid
		} catch (error) {
			const validationErrors = {};
			error.inner.forEach((e) => {
				validationErrors[e.path] = e.message;
			});
			setErrors(validationErrors);
			return false; // Form is invalid
		}
	};

	const inputChange = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const {
			target: { value, name },
		} = event;

		setFormState({
			...formState,
			[name]: value,
		});
	};

	const resetForm = () => {
		setFormState(initValue);
		setErrors({});
	};

	return {
		...formState,
		errors,
		inputChange,
		resetForm,
		validateForm,
	};
};

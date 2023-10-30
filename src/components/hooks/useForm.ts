import { ChangeEvent, useState } from 'react';

export const useForm = <T>(initValue: T) => {
	const [formState, setFormState] = useState(initValue);

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

	const resetForm = () => setFormState(initValue);

	return {
		...formState,
		formState,
		inputChange,
		resetForm,
	};
};

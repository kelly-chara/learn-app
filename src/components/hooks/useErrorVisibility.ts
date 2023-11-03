import { useState } from 'react';

const useErrorVisibility = (errors, nameInput) => {
	const hasError = errors && errors[nameInput];

	const [isErrorVisible, setIsErrorVisible] = useState(true);

	const handleBlur = () => {
		if (errors && errors[nameInput]) {
			setIsErrorVisible(false);
		}
	};

	const handleFocus = () => {
		if (errors && errors[nameInput]) {
			setIsErrorVisible(true);
		}
	};

	return { isErrorVisible, hasError, handleBlur, handleFocus };
};

export default useErrorVisibility;

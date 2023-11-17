import { useState } from 'react';

interface params {
	errors: Record<string, string>;
	nameInput: string;
}

const useErrorVisibility = ({ errors, nameInput }: params) => {
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

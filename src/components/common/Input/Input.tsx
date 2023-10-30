import React, { FC } from 'react';

interface InputProps {
	nameInput: string;
	labelName: string;
	placeholder?: string;
}

const Input: FC<InputProps> = ({ nameInput, labelName, placeholder }) => {
	return (
		<label htmlFor={nameInput}>
			{labelName}
			<input type='text' name={nameInput} placeholder={placeholder} />
		</label>
	);
};

export default Input;

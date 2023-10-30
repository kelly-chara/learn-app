import React, { FC, ChangeEvent } from 'react';

interface InputProps {
	nameInput: string;
	labelName: string;
	type: 'text' | 'checkbox' | 'textarea';
	value: string;
	placeholder?: string;
	onChangeHandler?: (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
}

const Input: FC<InputProps> = ({
	nameInput,
	labelName,
	type,
	value,
	placeholder,
	onChangeHandler,
}) => {
	return (
		<label htmlFor={nameInput} className='flex flex-col '>
			<span>{labelName}</span>
			{type === 'textarea' ? (
				<textarea
					name={nameInput}
					placeholder={placeholder}
					rows={4}
					value={value}
					onChange={
						onChangeHandler as React.ChangeEventHandler<HTMLTextAreaElement>
					}
					className='border border-primary-600 mt-2 align-middle resize-none pl-2 pt-2'
				/>
			) : (
				<input
					type={type}
					name={nameInput}
					placeholder={placeholder}
					value={value}
					onChange={
						onChangeHandler as React.ChangeEventHandler<HTMLInputElement>
					}
					className='border border-primary-600 pr-12 mt-2 p-2'
				/>
			)}
		</label>
	);
};

export default Input;

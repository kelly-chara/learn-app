import React, { FC } from 'react';
import { InputProps } from 'src/types/common/types';

const Input: FC<InputProps> = ({
	nameInput,
	labelName,
	type,
	value,
	placeholder,
	errors,
	onChangeHandler,
}) => {
	const hasError = errors && errors[nameInput]; // Check if there is an error for the input
	return (
		<div className='mb-4'>
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
						className={`border border-primary-600 mt-2 align-middle resize-none pl-2 pt-2 ${
							hasError ? 'border-red-500' : '' // Apply red border if there is an error
						}`}
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
						className={`border border-primary-600 pr-12 mt-2 p-2 ${
							hasError ? 'border-red-500' : '' // Apply red border if there is an error
						}`}
					/>
				)}
			</label>
			{hasError && (
				<span className='text-red-500 text-sm'>{errors[nameInput]}</span>
			)}
		</div>
	);
};

export default Input;

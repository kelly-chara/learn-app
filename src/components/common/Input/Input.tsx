import React, { FC } from 'react';
import { InputProps } from 'src/types/common/types';
import useErrorVisibility from 'src/components/hooks/useErrorVisibility';
const Input: FC<InputProps> = ({
	nameInput,
	labelName,
	value,
	placeholder,
	errors,
	styles,
	tabIndex,
	onChangeHandler,
}) => {
	const { isErrorVisible, hasError, handleBlur, handleFocus } =
		useErrorVisibility(errors, nameInput);

	return (
		<div className='mb-4'>
			<label className='flex flex-col '>
				<span>{labelName}</span>

				<input
					name={nameInput}
					placeholder={placeholder}
					value={value}
					tabIndex={tabIndex}
					onChange={
						onChangeHandler as React.ChangeEventHandler<HTMLInputElement>
					}
					onBlur={handleBlur}
					onFocus={handleFocus}
					className={
						styles
							? styles
							: `border border-primary-600 pr-12 mt-2 p-2 ${
									isErrorVisible && hasError ? 'border-red-500' : '' // Apply red border if there is an error
							  }`
					}
				/>
			</label>
			{isErrorVisible && hasError && (
				<span className='text-red-500 text-sm'>{errors[nameInput]}</span>
			)}
		</div>
	);
};

export default Input;

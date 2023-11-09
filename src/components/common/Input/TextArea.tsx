import React, { FC } from 'react';
import { InputProps } from 'src/types/common/types';
import useErrorVisibility from 'src/components/hooks/useErrorVisibility';
const TextArea: FC<InputProps> = ({
	nameInput,
	labelName,
	value,
	placeholder,
	errors,
	styles,
	onChangeHandler,
}) => {
	const { isErrorVisible, hasError, handleBlur, handleFocus } =
		useErrorVisibility(errors, nameInput);

	return (
		<div className='mb-4'>
			<label className='flex flex-col '>
				<span>{labelName}</span>

				<textarea
					name={nameInput}
					placeholder={placeholder}
					rows={4}
					value={value}
					onChange={
						onChangeHandler as React.ChangeEventHandler<HTMLTextAreaElement>
					}
					onBlur={handleBlur}
					onFocus={handleFocus}
					className={
						styles
							? styles
							: `border border-primary-600 mt-2 align-middle resize-none pl-2 pt-2 ${
									hasError ? 'border-red-500' : ' ' // Apply red border if there is an error
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

export default TextArea;

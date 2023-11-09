import React, { FC } from 'react';
import { InputCommonProps } from 'src/types/common/types';
import useErrorVisibility from 'src/components/hooks/useErrorVisibility';

export type InputProps = Omit<
	React.InputHTMLAttributes<HTMLInputElement>,
	'prefix'
> &
	InputCommonProps;

const Input: FC<InputProps> = ({ labelName, errors, name, ...otherProps }) => {
	const { isErrorVisible, hasError, handleBlur, handleFocus } =
		useErrorVisibility(errors, name);

	return (
		<div className='mb-4'>
			<label className='flex flex-col '>
				<span>{labelName}</span>

				<input
					onBlur={handleBlur}
					onFocus={handleFocus}
					name={name}
					{...otherProps}
					className={`border border-primary-600 pr-12 mt-2 p-2 ${
						isErrorVisible && hasError ? 'border-red-500' : '' // Apply red border if there is an error
					}`}
				/>
			</label>
			{isErrorVisible && hasError && (
				<span className='text-red-500 text-sm'>{errors[name]}</span>
			)}
		</div>
	);
};

export default Input;

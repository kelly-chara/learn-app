import React, { FC } from 'react';
import useErrorVisibility from 'src/components/hooks/useErrorVisibility';
import { InputCommonProps } from 'src/types/common/types';
// Textarea component props

type TextareaProps = Omit<
	React.TextareaHTMLAttributes<HTMLTextAreaElement>,
	'prefix'
> &
	InputCommonProps;

const TextArea: FC<TextareaProps> = ({
	labelName,
	name,
	errors,
	...textAreaProps
}) => {
	const { isErrorVisible, hasError, handleBlur, handleFocus } =
		useErrorVisibility(errors, name);

	return (
		<div className='mb-4'>
			<label className='flex flex-col '>
				<span>{labelName}</span>

				<textarea
					rows={4}
					onBlur={handleBlur}
					onFocus={handleFocus}
					name={name}
					className={`border border-primary-600 mt-2 align-middle resize-none pl-2 pt-2 ${
						hasError ? 'border-red-500' : ' ' // Apply red border if there is an error
					}`}
					{...textAreaProps}
				/>
			</label>
			{isErrorVisible && hasError && (
				<span className='text-red-500 text-sm'>{errors[name]}</span>
			)}
		</div>
	);
};

export default TextArea;

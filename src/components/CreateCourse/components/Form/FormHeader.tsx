import React, { FC } from 'react';
import Input from 'src/components/common/Input/Input';
import Button from 'src/components/common/Button/Button';
import { HeaderFormProps } from 'src/types/common/types';

export const FormHeader: FC<HeaderFormProps> = ({
	title,
	description,
	errors,
	inputChange,
}: HeaderFormProps) => {
	return (
		<div>
			<div className='flex flex-row justify-between items-center my-5'>
				<Input
					type='text'
					labelName='Title'
					nameInput='title'
					placeholder='Enter title...'
					value={title}
					onChangeHandler={inputChange}
					errors={errors}
				/>
				<Button buttonText='Create course' type='submit' />
			</div>

			<div>
				<Input
					type='textarea'
					labelName='Description'
					nameInput='description'
					placeholder='Enter description'
					value={description}
					onChangeHandler={inputChange}
					errors={errors}
				/>
			</div>
		</div>
	);
};

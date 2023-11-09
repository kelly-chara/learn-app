import React, { FC } from 'react';
import { HeaderFormProps } from 'src/types/common/types';
import Button from 'src/components/common/Button/Button';
import Input from 'src/components/common/Input/Input';
import TextArea from 'src/components/common/Input/TextArea';

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
					labelName='Title'
					nameInput='title'
					placeholder='Enter title...'
					value={title}
					onChangeHandler={inputChange}
					errors={errors}
					tabIndex={1}
				/>
				<Button buttonText='Create course' type='submit' />
			</div>

			<div>
				<TextArea
					labelName='Description'
					nameInput='description'
					placeholder='Enter description'
					value={description}
					onChangeHandler={inputChange}
					errors={errors}
					tabIndex={2}
				/>
			</div>
		</div>
	);
};

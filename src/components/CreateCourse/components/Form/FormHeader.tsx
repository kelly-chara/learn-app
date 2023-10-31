import React, { FC } from 'react';
import Input from 'src/components/common/Input/Input';
import Button from 'src/components/common/Button/Button';

interface HeaderProps {
	title: string;
	inputChange: (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
	description: string;
}
export const FormHeader: FC<HeaderProps> = ({
	title,
	inputChange,
	description,
}: HeaderProps) => {
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
				/>
				<Button buttonText='Create course' />
			</div>

			<div>
				<Input
					type='textarea'
					labelName='Description'
					nameInput='description'
					placeholder='Enter description'
					value={description}
					onChangeHandler={inputChange}
				/>
			</div>
		</div>
	);
};

import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Input, TextArea } from 'src/components/common';

export interface HeaderFormProps {
	title: string;
	inputChange: (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
	description: string;
	errors: { [key: string]: string };
}

export const FormHeader: FC<HeaderFormProps> = ({
	title,
	description,
	errors,
	inputChange,
}: HeaderFormProps) => {
	const { courseId } = useParams();
	return (
		<div>
			<div className='flex flex-row justify-between items-center my-5'>
				<Input
					labelName='Title'
					name='title'
					placeholder='Enter title...'
					value={title}
					onChange={inputChange}
					errors={errors}
					tabIndex={1}
				/>
				<Button
					buttonText={courseId ? 'Update Course' : 'Create course'}
					type='submit'
				/>
			</div>

			<div>
				<TextArea
					labelName='Description'
					name='description'
					placeholder='Enter description'
					value={description}
					onChange={inputChange}
					errors={errors}
					tabIndex={2}
				/>
			</div>
		</div>
	);
};

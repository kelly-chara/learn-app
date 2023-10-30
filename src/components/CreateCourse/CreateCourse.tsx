import React, { FC } from 'react';
import Input from '../common/Input/Input';
import AuthorItem from './components/AuthorItem/AuthorItem';
import Button from '../common/Button/Button';
const CreateCourse: FC = () => {
	return (
		<div>
			<div>
				<div className='flex flex-row justify-between items-center my-5'>
					<Input
						type='text'
						labelName='Title'
						nameInput='title'
						placeholder='Enter title...'
					/>
					<Button buttonText='Create course' />
				</div>

				<div>
					<Input
						type='textarea'
						labelName='Description'
						nameInput='description'
						placeholder='Enter description'
					/>
				</div>
			</div>
		</div>
	);
};
export default CreateCourse;

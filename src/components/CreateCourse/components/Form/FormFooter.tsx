import React, { FC } from 'react';
import Input from 'src/components/common/Input/Input';
import { FooterFormProps } from 'src/types/common/types';

export const FormFooter: FC<FooterFormProps> = ({
	duration,
	errors,
	inputChange,
}: FooterFormProps) => {
	return (
		<div>
			<div className='flex flex-col gap-8'>
				<h4 className='sub-header text-center'>Duration</h4>
				<Input
					type='text'
					labelName='Duration'
					nameInput='duration'
					placeholder='Enter duration in minutes...'
					value={duration}
					onChangeHandler={inputChange}
					errors={errors}
				/>
				<p>
					Duration: <span className='font-bold text-2xl'>02:02</span> hours
				</p>
			</div>
		</div>
	);
};

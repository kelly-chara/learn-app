import React, { FC } from 'react';
import Input from 'src/components/common/Input/Input';

interface FooterProps {
	duration: string;
	inputChange: (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
}
export const FormFooter: FC<FooterProps> = ({
	duration,
	inputChange,
}: FooterProps) => {
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
				/>
				<p>
					Duration: <span className='font-bold text-2xl'>02:02</span> hours
				</p>
			</div>
		</div>
	);
};

import React, { FC } from 'react';
import { Input } from 'src/components/common';
import { getCourseDuration } from 'src/components/helpers';

export interface FooterFormProps {
	duration: string;
	errors: { [key: string]: string };
	inputChange: (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
}

export const FormFooter: FC<FooterFormProps> = ({
	duration,
	errors,
	inputChange,
}: FooterFormProps) => {
	const parsedDuration = parseInt(duration);
	const isValidDuration = !isNaN(parsedDuration) && parsedDuration >= 0;
	return (
		<div>
			<div className='flex flex-col gap-8'>
				<h4 className='sub-header text-center'>Duration</h4>
				<Input
					labelName='Duration'
					name='duration'
					placeholder='Enter duration in minutes...'
					value={duration}
					onChange={inputChange}
					errors={errors}
					tabIndex={5}
				/>
				<p>
					Duration:{' '}
					<span className='font-bold text-2xl'>
						{isValidDuration ? getCourseDuration(parsedDuration) : '00:00'}
					</span>{' '}
					Hours
				</p>
			</div>
		</div>
	);
};

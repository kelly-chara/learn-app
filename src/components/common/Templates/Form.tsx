import React from 'react';
import { Link } from 'react-router-dom';

interface FormTemplateProps {
	children: JSX.Element | JSX.Element[];
	submitFunction: (event: React.FormEvent) => Promise<void>;
	action: string;
	route: string;
	title: string;
}

const FormTemplate = ({
	children,
	submitFunction,
	action,
	route,
	title,
}: FormTemplateProps): JSX.Element => {
	return (
		<div className='flex flex-col justify-center items-center gap-3 '>
			<h2 className='text-2xl text-center'>{title}</h2>
			<form
				onSubmit={submitFunction}
				className='flex flex-col justify-center items-center gap-1 w-8/12'
			>
				{children}
			</form>

			<span>
				if you have an account you can{' '}
				<Link to={route} className='text-blue-600'>
					{action}
				</Link>
			</span>
		</div>
	);
};
export default FormTemplate;

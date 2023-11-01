import React, { FC } from 'react';

interface ButtonProps {
	buttonText: string;
	handleClick?: (() => void) | ((event: React.FormEvent) => Promise<void>);
	type?: 'button' | 'submit' | 'reset';
}

const Button: FC<ButtonProps> = ({
	buttonText,
	handleClick,
	type = 'button',
}) => {
	return (
		<button className='button' type={type} onClick={handleClick}>
			{buttonText}
		</button>
	);
};

export default Button;

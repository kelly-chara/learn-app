import React, { FC } from 'react';

interface ButtonProps {
	buttonText: string;
	handleClick: () => void;
}

const Button: FC<ButtonProps> = ({ buttonText, handleClick }) => {
	return (
		<button className='button' onClick={handleClick}>
			{buttonText}
		</button>
	);
};

export default Button;

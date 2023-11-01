import React, { FC } from 'react';

import { ButtonProps } from 'src/types/common/types';

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

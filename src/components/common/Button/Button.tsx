import React, { FC } from 'react';

type ButtonAttributes = Omit<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	'prefix'
>;

interface ButtonProps extends ButtonAttributes {
	buttonText: string;
	className?: string;
	style?: React.CSSProperties;
	handleClick?: (() => void) | ((event: React.FormEvent) => Promise<void>);
}

const Button: FC<ButtonProps> = ({
	buttonText,
	handleClick,
	className,
	style,
	...buttonProps
}) => {
	return (
		<button
			style={style}
			className={`button ${className}`}
			onClick={handleClick}
			{...buttonProps}
		>
			{buttonText}
		</button>
	);
};

export default Button;

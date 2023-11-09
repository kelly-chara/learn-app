import React, { FC } from 'react';
import Button from '../common/Button/Button';
import Logo from './Components/Logo/Logo';
import { HeaderProps } from 'src/types/common/types';

const Header: FC<HeaderProps> = ({ userName }) => {
	return (
		<header className='w-full justify-between centered-row px-12 py-4'>
			<Logo />
			<div className='centered-row gap-4 text-normal'>
				<p>{userName}</p>
				<Button buttonText='Logout' handleClick={() => console.log('logout')} />
			</div>
		</header>
	);
};

export default Header;

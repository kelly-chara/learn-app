import React, { FC, useContext } from 'react';
import Button from '../common/Button/Button';
import Logo from './Components/Logo/Logo';
import { CoursesContext } from 'src/context/CourseContext';
import { useNavigate, Link } from 'react-router-dom';

export interface HeaderProps {
	userName: string;
}

const Header: FC<HeaderProps> = () => {
	const navigate = useNavigate();
	const { user, token, setLoginToken, setUser } = useContext(CoursesContext);

	const logoutHandler = () => {
		setLoginToken(null);
		setUser(null);
		navigate('/login');
	};
	return (
		<header className='w-full justify-between centered-row px-12 py-4'>
			<Link to={'/courses'}>
				<Logo />
			</Link>

			{token && (
				<div className='centered-row gap-4 text-normal'>
					<p>{user?.name}</p>
					<Button buttonText='Logout' handleClick={logoutHandler} />
				</div>
			)}
		</header>
	);
};

export default Header;

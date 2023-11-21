import React, { FC } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { getUserSelector } from 'src/store/selectors';
import { logoutUserThunk } from 'src/store/user/thunk';

import Button from '../common/Button/Button';
import Logo from './Components/Logo/Logo';

export interface HeaderProps {
	userName: string;
}

const Header: FC<HeaderProps> = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { name } = useAppSelector(getUserSelector);
	const token = localStorage.getItem('token');
	const { pathname } = useLocation();

	const logoutHandler = async () => {
		try {
			await dispatch(logoutUserThunk());
			navigate('/login');
		} catch (error) {
			console.log(error);
		}
	};

	// Specify the routes where you don't want to render the header
	const excludeRoutes = ['/login', '/registration'];

	// Check if the current route is in the excludeRoutes array
	const shouldRenderHeader = !excludeRoutes.includes(pathname);

	return shouldRenderHeader ? (
		<header className='w-full justify-between centered-row px-12 py-4'>
			<Link to={'/courses'}>
				<Logo />
			</Link>

			{token && (
				<div className='centered-row gap-4 text-normal'>
					<p>{name && name}</p>
					<Button buttonText='Logout' handleClick={logoutHandler} />
				</div>
			)}
		</header>
	) : null;
};

export default Header;

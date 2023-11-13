import React, { FC } from 'react';
import Button from '../common/Button/Button';
import Logo from './Components/Logo/Logo';
import { useNavigate, Link } from 'react-router-dom';
import { logoutUser } from 'src/services';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { logoutUserAction } from 'src/store/user/actions';
import { getUserSelector } from 'src/store/selectors';

export interface HeaderProps {
	userName: string;
}

const Header: FC<HeaderProps> = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { name } = useAppSelector(getUserSelector);
	const token = localStorage.getItem('token');
	const logoutHandler = async () => {
		try {
			await logoutUser(token);
			dispatch(logoutUserAction());
			navigate('/login');
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<header className='w-full justify-between centered-row px-12 py-4'>
			<Link to={'/courses'}>
				<Logo />
			</Link>

			{token && (
				<div className='centered-row gap-4 text-normal'>
					<p>{name ? name : 'ADMIN'}</p>
					<Button buttonText='Logout' handleClick={logoutHandler} />
				</div>
			)}
		</header>
	);
};

export default Header;

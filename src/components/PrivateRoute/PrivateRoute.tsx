import React, { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'src/store/hooks';
import { getUserSelector } from 'src/store/selectors';

interface PrivateProps {
	children: ReactElement;
}

const PrivateRoute = ({ children }: PrivateProps): JSX.Element => {
	const { role } = useAppSelector(getUserSelector);
	return role == 'admin' ? children : <Navigate to='/login' />;
};

export default PrivateRoute;

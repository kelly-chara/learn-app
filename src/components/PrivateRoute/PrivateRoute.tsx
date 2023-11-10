import React, { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateProps {
	children: ReactElement;
	name: string;
}

export const PrivateRoute = ({ children, name }: PrivateProps): JSX.Element => {
	return name == null ? children : <Navigate to='/login' />;
};

import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateProps {
	children: ReactNode;
}

export const PrivateRoute = ({ children }: PrivateProps) => {
	const auth = 'ADMIN';

	return auth ? children : <Navigate to='/login' />;
};

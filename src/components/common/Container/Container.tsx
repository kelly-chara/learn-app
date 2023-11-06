import React from 'react';
import Header from 'src/components/Header/Header';
import { Outlet } from 'react-router-dom';
const Container = () => {
	return (
		<div className='container'>
			<div className='w-full h-full p-12'>
				<Header userName='kelly' />
				<Outlet />
			</div>
		</div>
	);
};

export default Container;

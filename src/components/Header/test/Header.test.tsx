import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UserType } from 'src/store/user/types';
import { RootState } from 'src/store';
import { CourseType } from 'src/store/courses/types';
import { AuthorType } from 'src/store/authors/types';

jest.mock('react-redux', () => ({
	useSelector: jest.fn(),
	useDispatch: jest.fn(),
}));

jest.mock('axios');
jest.mock('react-redux', () => ({
	useSelector: jest.fn(),
	useDispatch: jest.fn(),
}));

const fakeUser: UserType = {
	id: '12333',
	name: 'John Doe',
	isAuth: true,
	email: 'JohnDoe@email.com',
	token: '1q2w3e36qwesdsadfsdfggh25jfdgj',
	role: 'admin',
};

describe('Header', () => {
	it('should display user name and logo', async () => {
		(axios.delete as jest.Mock).mockImplementation(() => Promise.resolve(''));

		(useDispatch as jest.Mock).mockReturnValue(jest.fn());
		(useSelector as jest.Mock).mockImplementation(
			(selector: (state: RootState) => RootState) =>
				selector({
					user: fakeUser,
					authors: [] as AuthorType[],
					courses: [] as CourseType[],
				})
		);

		render(
			<Router>
				<Header userName='Jhon Doe' />
			</Router>
		);

		const userName = screen.findByText('Jhon Doe');
		const logo = screen.findAllByAltText('learn logo');

		expect(userName).toBeTruthy();
		expect(logo).toBeTruthy();
	});
});

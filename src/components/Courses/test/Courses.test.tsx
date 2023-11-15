import React, { PropsWithChildren } from 'react';
import {
	render,
	screen,
	RenderOptions,
	fireEvent,
} from '@testing-library/react';
import axios from 'axios';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';
import { mockedAuthorsList, mockedCoursesList } from 'src/components/constants';
import { Provider } from 'react-redux';
import { UserType } from 'src/store/user/types';
import { RootState, AppStore, setupStore } from 'src/store';
import type { PreloadedState } from '@reduxjs/toolkit';
import Courses from '../Courses';

jest.mock('axios');

const mockUser: UserType = {
	id: '12333',
	name: 'John Doe',
	isAuth: true,
	email: 'JohnDoe@email.com',
	token: '1q2w3e36qwesdsadfsdfggh25jfdgj',
	role: 'admin',
};

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
	preloadedState?: PreloadedState<RootState>;
	store?: AppStore;
}

export function renderWithProviders(
	ui: React.ReactElement,
	{
		preloadedState = {
			user: mockUser,
			authors: mockedAuthorsList,
			courses: mockedCoursesList,
		},
		// Automatically create a store instance if no  was passed in
		store = setupStore(preloadedState),
		...renderOptions
	}: ExtendedRenderOptions = {}
) {
	function Wrapper({ children }: PropsWithChildren): JSX.Element {
		return <Provider store={store}>{children}</Provider>;
	}
	return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

describe('Courses', () => {
	it('should same amount of courseCards as array lenght', async () => {
		(axios.get as jest.Mock).mockImplementation(() => Promise.resolve(''));
		renderWithProviders(
			<MemoryRouter initialEntries={['/courses']}>
				<Courses />
			</MemoryRouter>
		);

		const courseCards = screen.getAllByTestId('course-card');
		expect(courseCards.length).toBe(mockedCoursesList.length);
	});

	it('should show the courseForm after clicking add button', async () => {
		(axios.get as jest.Mock).mockImplementation(() => Promise.resolve(''));

		renderWithProviders(
			<BrowserRouter>
				<Courses />
			</BrowserRouter>
		);

		const addNewCourseButton = screen.getByText('Add New Course');
		fireEvent.click(addNewCourseButton);

		const coursesRoute = '/courses/add';

		expect(window.location.pathname).toBe(coursesRoute);
	});
});

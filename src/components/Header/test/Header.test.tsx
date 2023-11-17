import React, { PropsWithChildren } from 'react';
import { render, screen, RenderOptions } from '@testing-library/react';
import Header from '../Header';
import axios from 'axios';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { UserType } from 'src/store/user/types';
import { RootState, AppStore, setupStore } from 'src/store';

import type { PreloadedState } from '@reduxjs/toolkit';

jest.mock('axios');

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
	preloadedState?: PreloadedState<RootState>;
	store?: AppStore;
}

const fakeUser: UserType = {
	id: '12333',
	name: 'John Doe',
	isAuth: true,
	email: 'JohnDoe@email.com',
	token: '1q2w3e36qwesdsadfsdfggh25jfdgj',
	role: 'admin',
};

export function renderWithProviders(
	ui: React.ReactElement,
	{
		preloadedState = {},
		// Automatically create a store instance if no store was passed in
		store = setupStore(preloadedState),
		...renderOptions
	}: ExtendedRenderOptions = {}
) {
	function Wrapper({ children }: PropsWithChildren): JSX.Element {
		return <Provider store={store}>{children}</Provider>;
	}
	return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

describe('Header', () => {
	it('should display user name and logo on courses route', async () => {
		(axios.delete as jest.Mock).mockImplementation(() => Promise.resolve(''));
		renderWithProviders(
			<MemoryRouter initialEntries={['/courses']}>
				<Header userName={fakeUser.name} />
			</MemoryRouter>
		);

		const userName = screen.findByText('Jhon Doe');
		const logo = screen.findAllByAltText('learn logo');

		expect(userName).toBeTruthy();
		expect(logo).toBeTruthy();
	});

	it('should not display component on login route', async () => {
		(axios.delete as jest.Mock).mockImplementation(() => Promise.resolve(''));
		renderWithProviders(
			<MemoryRouter initialEntries={['/login']}>
				<Header userName={fakeUser.name} />
			</MemoryRouter>
		);

		const userName = screen.findByText('Jhon Doe');
		const logo = screen.findAllByAltText('learn logo');

		expect(screen).not.toContain(userName);
		expect(screen).not.toContain(logo);
	});

	it('should not display component on registration route', async () => {
		(axios.delete as jest.Mock).mockImplementation(() => Promise.resolve(''));
		renderWithProviders(
			<MemoryRouter initialEntries={['/registration']}>
				<Header userName={fakeUser.name} />
			</MemoryRouter>
		);

		const userName = screen.findByText('Jhon Doe');
		const logo = screen.findAllByAltText('learn logo');

		expect(screen).not.toContain(userName);
		expect(screen).not.toContain(logo);
	});
});

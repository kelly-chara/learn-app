import React, { PropsWithChildren } from 'react';
import { render, screen, RenderOptions } from '@testing-library/react';
import axios from 'axios';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CourseType } from 'src/store/courses/types';
import { RootState, AppStore, setupStore } from 'src/store';
import type { PreloadedState } from '@reduxjs/toolkit';
import { CourseCard } from '../CourseCard';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
	preloadedState?: PreloadedState<RootState>;
	store?: AppStore;
}

jest.mock('axios');

const mockCourse: CourseType = {
	id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
	title: 'JavaScript',
	description: `description`,
	creationDate: '08/03/2021',
	duration: 160,
	authors: ['1', '2'],
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

describe('CourseCard', () => {
	it('should display all elements from courseCard', async () => {
		(axios.delete as jest.Mock).mockImplementation(() => Promise.resolve(''));

		renderWithProviders(
			<MemoryRouter>
				<CourseCard course={mockCourse} />
			</MemoryRouter>
		);

		screen.debug();

		const titleElement = screen.getByText(mockCourse.title);
		const descriptionElement = screen.getByText(mockCourse.description);
		const date = screen.getByText('08.03.2021');
		const duration = screen.getByText('02:40 hours');
		// mock author selector
		const authorList = screen.getByText('Authors:');

		expect(titleElement).toBeTruthy();
		expect(descriptionElement).toBeTruthy();
		expect(date).toBeTruthy();
		expect(duration).toBeTruthy();
		expect(authorList).toBeTruthy();
	});
});

import React from 'react';
import { screen } from '@testing-library/react';
import axios from 'axios';
import { MemoryRouter } from 'react-router-dom';
import { CourseType } from 'src/store/courses/types';
import { CourseCard } from '../CourseCard';
import { renderWithProviders } from 'src/components/Courses/test/Courses.test';

jest.mock('axios');

const mockCourse: CourseType = {
	id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
	title: 'JavaScript',
	description: `description`,
	creationDate: '08/03/2021',
	duration: 160,
	authors: [
		'27cc3006-e93a-4748-8ca8-73d06aa93b6d',
		'f762978b-61eb-4096-812b-ebde22838167',
	],
};

describe('CourseCard', () => {
	it('should display all elements from courseCard', async () => {
		(axios.delete as jest.Mock).mockImplementation(() => Promise.resolve(''));

		renderWithProviders(
			<MemoryRouter>
				<CourseCard course={mockCourse} />
			</MemoryRouter>
		);

		const titleElement = screen.getByText(mockCourse.title);
		const descriptionElement = screen.getByText(mockCourse.description);
		const date = screen.getByText('08.03.2021');
		const duration = screen.getByText('02:40 hours');
		const authorList = screen.getByText('Vasiliy Dobkin, Nicolas Kim');

		expect(titleElement).toBeTruthy();
		expect(descriptionElement).toBeTruthy();
		expect(date).toBeTruthy();
		expect(duration).toBeTruthy();
		expect(authorList).toBeTruthy();
	});

	it('should not show update and delete buttons when user is not admin', async () => {
		(axios.delete as jest.Mock).mockImplementation(() => Promise.resolve(''));

		renderWithProviders(
			<MemoryRouter>
				<CourseCard course={mockCourse} />
			</MemoryRouter>
		);

		expect(screen).not.toContain('🖉');
		expect(screen).not.toContain('🗑️');
	});

	it('should show update and delete buttons when user is not admin', async () => {
		(axios.delete as jest.Mock).mockImplementation(() => Promise.resolve(''));

		renderWithProviders(
			<MemoryRouter>
				<CourseCard course={mockCourse} />
			</MemoryRouter>
		);

		const updateButton = screen.getByText('🖉');
		const deleteButton = screen.getByText('🗑️');

		expect(updateButton).toBeTruthy();
		expect(deleteButton).toBeTruthy();
	});
});

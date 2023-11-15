import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios';
import { MemoryRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { mockedAuthorsList, mockedCoursesList } from 'src/components/constants';
import { UserType } from 'src/store/user/types';
import Courses from '../Courses';
import CourseForm from 'src/components/CreateCourse/CourseForm';

jest.mock('axios');
jest.mock('react-redux', () => ({
	useSelector: jest.fn(),
	useDispatch: jest.fn(),
}));

const mockUser: UserType = {
	id: '12333',
	name: 'John Doe',
	isAuth: true,
	email: 'JohnDoe@email.com',
	token: '1q2w3e36qwesdsadfsdfggh25jfdgj',
	role: 'admin',
};

describe('Courses', () => {
	it('should display amount of CourseCard equal length of courses array.', async () => {
		(axios.delete as jest.Mock).mockImplementation(() => Promise.resolve(''));

		(useSelector as jest.Mock).mockImplementation(
			(selector: (state: RootState) => any) =>
				selector({
					user: mockUser,
					courses: mockedCoursesList,
					authors: mockedAuthorsList,
				})
		);
		render(
			<MemoryRouter>
				<Courses />
			</MemoryRouter>
		);

		const courseCards = screen.getAllByTestId('course-card');
		expect(courseCards.length).toBe(mockedCoursesList.length);
	});

	it('should display amount of CourseCard equal length of courses array.', async () => {
		(axios.delete as jest.Mock).mockImplementation(() => Promise.resolve(''));

		(useSelector as jest.Mock).mockImplementation(
			(selector: (state: RootState) => any) =>
				selector({
					user: mockUser,
					courses: mockedCoursesList,
					authors: mockedAuthorsList,
				})
		);
		render(
			<MemoryRouter>
				<Courses />
				<CourseForm />
			</MemoryRouter>
		);

		screen.debug();
		// Query for the "Add new course" button and click it
		const addNewCourseButton = screen.getByText('Add New Course');
		fireEvent.click(addNewCourseButton);

		// Query for the CourseForm
		const courseForm = screen.getByTestId('course-form');

		expect(courseForm).toBeTruthy();
	});
});

import React, { useEffect } from 'react';
import {
	Courses,
	Login,
	Registration,
	CourseInfo,
	PrivateRoute,
	CourseForm,
} from './components';
import { Container } from './components/common';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'src/store/hooks';
import { fetchAllCourses } from './store/courses/thunk';
import { fetchAllAuthors } from './store/authors/thunk';
import { getCurrentUserThunk } from './store/user/thunk';

function App() {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const token = localStorage.getItem('token')?.replace(/^"(.*)"$/, '$1') || '';

	useEffect(() => {
		const fetchUser = async () => {
			try {
				await dispatch(getCurrentUserThunk());
			} catch (error) {
				console.error('Error fetching current user:', error);
			}
		};
		if (token) {
			fetchUser();
		}
	}, [token]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				await dispatch(fetchAllCourses());
				await dispatch(fetchAllAuthors());
			} catch (error) {
				console.error('Error fetching courses:', error);
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		const token =
			localStorage.getItem('token')?.replace(/^"(.*)"$/, '$1') || '';

		// If token is present, redirect to '/courses'
		if (token) {
			navigate('/courses');
		} else {
			navigate('/login');
		}
	}, []);

	return (
		<Routes>
			<Route path='/' element={<Container />}>
				<Route
					path='/courses/update/:courseId'
					element={
						<PrivateRoute>
							<CourseForm />
						</PrivateRoute>
					}
				/>
				<Route
					path='/courses/add'
					element={
						<PrivateRoute>
							<CourseForm />
						</PrivateRoute>
					}
				/>
				<Route
					path='/courses/update/:courseId'
					element={
						<PrivateRoute>
							<CourseForm />
						</PrivateRoute>
					}
				/>
				<Route path='/courses' element={<Courses />} />
				<Route path='/courses/:courseId' element={<CourseInfo />} />
				<Route path='/registration' element={<Registration />} />
				<Route path='/login' element={<Login />} />
			</Route>
		</Routes>
	);
}

export default App;

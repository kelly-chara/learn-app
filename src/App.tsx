import React, { useEffect } from 'react';
import Courses from './components/Courses/Courses';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import Container from './components/common/Container/Container';
import CourseForm from './components/CreateCourse/CourseForm';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
import { useAppDispatch } from 'src/store/hooks';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { fetchAllCourses } from './store/courses/thunk';
import { fetchAllAuthors } from './store/authors/thunk';
function App() {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

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
		// Check if there is a token in localStorage
		const token = localStorage.getItem('token');

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
						<PrivateRoute name={null}>
							<CourseForm />
						</PrivateRoute>
					}
				/>
				<Route
					path='/courses/add'
					element={
						<PrivateRoute name={null}>
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

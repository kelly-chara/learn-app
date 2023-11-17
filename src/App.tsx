import React, { useEffect } from 'react';
import Courses from './components/Courses/Courses';
import CourseForm from './components/CreateCourse/CourseForm';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Container from './components/common/Container/Container';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
import { getAllCourses, getAllAuthors } from 'src/services';
import { saveCoursesAction } from 'src/store/courses/actions';
import { getAllAuthorsAction } from 'src/store/authors/actions';
import { useAppDispatch } from 'src/store/hooks';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
function App() {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const _courses = await getAllCourses();
				const _authors = await getAllAuthors();

				dispatch(saveCoursesAction(_courses));
				dispatch(getAllAuthorsAction(_authors));
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
				<Route path='/courses' element={<Courses />} />
				<Route path='/courses/:courseId' element={<CourseInfo />} />
				<Route path='/registration' element={<Registration />} />
				<Route path='/login' element={<Login />} />
			</Route>
		</Routes>
	);
}

export default App;

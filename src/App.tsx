import React, { useEffect } from 'react';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Container from './components/common/Container/Container';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
import { getAllCourses, getAllAuthors } from 'src/services';
import { saveCoursesAction } from 'src/store/courses/actions';
import { getAllAuthorsAction } from 'src/store/authors/actions';
import { useAppDispatch } from 'src/store/hooks';

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
				<Route path='/courses/add' element={<CreateCourse />} />
				<Route path='/courses' element={<Courses />} />
				<Route path='/courses/:courseId' element={<CourseInfo />} />
				<Route path='/registration' element={<Registration />} />
				<Route path='/login' element={<Login />} />
			</Route>
		</Routes>
	);
}

export default App;

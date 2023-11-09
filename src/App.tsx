import React, { useEffect } from 'react';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Container from './components/common/Container/Container';
import { getAllCourses } from './services';

import { CourseInfo } from './components/CourseInfo/CourseInfo';
CourseInfo;
function App() {
	const navigate = useNavigate();

	useEffect(() => {
		// Check if there is a token in localStorage
		const token = localStorage.getItem('token');
		getAllCourses();
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

import React from 'react';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Button from './components/common/Button/Button';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Container from './components/common/Container/Container';
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Container />}>
					<Route
						path='/courses/add'
						element={
							<>
								<Button buttonText=' < ' />
								<CreateCourse />
							</>
						}
					/>
					<Route path='/courses' element={<Courses />} />
					<Route path='/registration' element={<Registration />} />
					<Route path='/login' element={<Login />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

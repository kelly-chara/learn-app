import React, { useState } from 'react';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Button from './components/common/Button/Button';
import Registration from './components/Registration/Registration';
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
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

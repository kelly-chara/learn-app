import React, { useState } from 'react';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';

function App() {
	const [showCreateCourses, setShowCreateCourses] = useState(false);

	const changeView = () => {
		setShowCreateCourses((showCreateCourses) => !showCreateCourses);
	};

	return (
		<div className='container'>
			<Header userName='Kelly' />
			<div className='w-full h-full p-12'>
				{showCreateCourses ? (
					<CreateCourse />
				) : (
					<Courses toggleView={changeView} />
				)}
			</div>
		</div>
	);
}

export default App;

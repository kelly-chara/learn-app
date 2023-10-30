import React from 'react';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
function App() {
	return (
		<div className='container'>
			<Header userName='Kelly' />
			{/* <Courses /> */}
			<div className='w-full h-full p-12'>
				<CreateCourse />
			</div>
		</div>
	);
}

export default App;

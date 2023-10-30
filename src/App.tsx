import React from 'react';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
function App() {
	return (
		<div className='container'>
			<Header userName='Kelly' />
			<Courses />
		</div>
	);
}

export default App;

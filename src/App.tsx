import React, { useState } from 'react';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import { CoursesProvider } from './context/CourseProvider';
import Button from './components/common/Button/Button';

function App() {
	const [showCreateCourses, setShowCreateCourses] = useState(false);

	const changeView = () => {
		setShowCreateCourses((showCreateCourses) => !showCreateCourses);
	};

	return (
		<CoursesProvider>
			<div className='container'>
				<Header userName='Kelly' />

				<div className='w-full h-full p-12'>
					{showCreateCourses ? (
						<>
							<Button buttonText=' < ' handleClick={changeView} />
							<CreateCourse />
						</>
					) : (
						<Courses toggleView={changeView} />
					)}
				</div>
			</div>
		</CoursesProvider>
	);
}

export default App;

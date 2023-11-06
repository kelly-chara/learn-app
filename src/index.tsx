import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { CoursesProvider } from './context/CourseProvider';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<CoursesProvider>
			<App />
		</CoursesProvider>
	</React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { CoursesProvider } from './context/CourseProvider';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<CoursesProvider>
				<App />
			</CoursesProvider>
		</BrowserRouter>
	</React.StrictMode>
);

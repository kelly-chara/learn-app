import axios from 'axios';

const CoursesApi = axios.create({
	baseURL: 'http://localhost:4000',
});

export default CoursesApi;

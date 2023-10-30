import { mockedAuthorsList } from '../constants';

export const getAuthorsById = (ids: string[]): string => {
	const authors = ids.map((id) => {
		const author = mockedAuthorsList.find((author) => author.id === id);
		return author ? author.name : '';
	});

	return authors.join(', ');
};

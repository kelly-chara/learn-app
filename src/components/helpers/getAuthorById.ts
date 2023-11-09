import { Author } from 'src/types/common/types';

export const getAuthorsById = (ids: string[]): string => {
	const existingAuthors: Author[] = JSON.parse(
		localStorage.getItem('authors') || '[]'
	);

	const authors = ids.map((id) => {
		const author = existingAuthors?.find((author) => author.id === id);
		return author ? author.name : '';
	});

	return authors.join(', ');
};

export const getAllAuthorsNames = (): string[] => {
	const existingAuthors: Author[] = JSON.parse(
		localStorage.getItem('authors') || '[]'
	);

	console.log(existingAuthors);
	const authors = existingAuthors?.map((author) => {
		return author.name;
	});

	return authors;
};

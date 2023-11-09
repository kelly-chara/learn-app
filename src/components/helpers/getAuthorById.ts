import { AuthorType } from 'src/store/authors/types';

export const getAuthorsById = (
	ids: string[],
	existingAuthors: AuthorType[]
): string[] => {
	// eslint-disable-next-line no-debugger
	debugger;
	const authors = ids.map((id) => {
		console.log(id);
		console.log(existingAuthors);
		const author = existingAuthors.find((authorType) => authorType.id === id);
		return author ? author.name : '';
	});
	return authors;
};

export const getAllAuthorsNames = (existingAuthors: AuthorType[]): string[] => {
	const authors = existingAuthors?.map((author) => {
		return author.name;
	});

	return authors;
};

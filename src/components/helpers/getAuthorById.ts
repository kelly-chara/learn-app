import { AuthorType } from 'src/store/authors/types';

export const getAuthorsNamesById = (
	ids: string[],
	existingAuthors: AuthorType[]
): string[] => {
	const authors = ids.map((id) => {
		const author = existingAuthors?.find((authorType) => authorType.id === id);
		return author ? author.name : '';
	});
	return authors;
};

export const getAuthorsById = (
	ids: string[],
	existingAuthors: AuthorType[]
): AuthorType[] => {
	const authors = ids?.map((id) => {
		const author = existingAuthors?.find((authorType) => authorType.id === id);
		return author && author;
	});
	return authors;
};

export const getAllAuthorsNames = (existingAuthors: AuthorType[]): string[] => {
	const authors = existingAuthors?.map((author) => {
		return author.name;
	});

	return authors;
};

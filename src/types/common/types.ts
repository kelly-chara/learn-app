export interface Author {
	id: string;
	name: string;
}

export interface Course {
	id: string;
	title: string;
	description: string;
	creationDate: string;
	duration: number;
	authors: string[];
}

export type CourseCreated = Omit<Course, 'id'>;

// Shared interface for common Input properties
export interface InputCommonProps {
	/**
	 * The error object for validations
	 */
	errors?: { [key: string]: string }; // Accept errors as an object with string keys
	/**
	 * The label name
	 */
	labelName?: string;
}

export interface AccountInfo {
	name: string;
	email: string;
	password: string;
}

export type User = Omit<AccountInfo, 'password'>;

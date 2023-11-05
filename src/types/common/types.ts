import React, { ChangeEvent, FocusEvent } from 'react';

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

export interface CourseCardProps {
	course: Course;
}
export interface AuthorItemProps {
	author: Author;
	isInChosenList: boolean;
	handleDeletion?: (author: Author) => void;
	addAuthor?: (author: Author) => void;
}

export interface ButtonProps {
	buttonText: string;
	handleClick?: (() => void) | ((event: React.FormEvent) => Promise<void>);
	type?: 'button' | 'submit' | 'reset';
}

// Shared interface for common properties
interface CommonProps {
	/**
	 * The error object for validations
	 */
	errors?: { [key: string]: string }; // Accept errors as an object with string keys
	/**
	 * The label name
	 */
	labelName?: string;
}
export type InputProps = Omit<
	React.InputHTMLAttributes<HTMLInputElement>,
	'prefix'
> &
	CommonProps;

// Textarea component props
export type TextareaProps = Omit<
	React.TextareaHTMLAttributes<HTMLTextAreaElement>,
	'prefix'
> &
	CommonProps;

export interface FooterFormProps {
	duration: string;
	errors: { [key: string]: string };
	inputChange: (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
}

export interface HeaderFormProps {
	title: string;
	inputChange: (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
	description: string;
	errors: { [key: string]: string };
}

export interface HeaderProps {
	userName: string;
}

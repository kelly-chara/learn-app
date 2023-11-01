import React, { ChangeEvent } from 'react';

export interface Author {
	id: string;
	name: string;
}

export interface AuthorItemProps {
	author: Author;
}

export interface ButtonProps {
	buttonText: string;
	handleClick?: (() => void) | ((event: React.FormEvent) => Promise<void>);
	type?: 'button' | 'submit' | 'reset';
}

export interface InputProps {
	nameInput: string;
	labelName: string;
	type: 'text' | 'textarea';
	value: string;
	placeholder?: string;
	errors?: { [key: string]: string }; // Accept errors as an object with string keys
	onChangeHandler?: (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
}

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
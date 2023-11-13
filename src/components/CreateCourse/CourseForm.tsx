import React, { FC, useState } from 'react';
import * as Yup from 'yup';
import { Authors } from './components/Authors/Authors';
import { FormHeader, AuthorForm, FormFooter } from './components/Form';
import { useForm } from '../hooks/useForm';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { AuthorType } from 'src/store/authors/types';
import { CourseType } from 'src/store/courses/types';
import { addNewCourseThunk, updateCourseThunk } from 'src/store/courses/thunk';
import { getAuthorsById, getCourseById } from '../helpers';
import { getCoursesSelector, getAuthorsSelector } from 'src/store/selectors';

const validationSchema = Yup.object().shape({
	title: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	description: Yup.string()
		.min(2, 'The description is too short')
		.required('Field is required'),
	duration: Yup.number().required('Field is required'),
});

const CourseForm: FC<{ courseData?: CourseType }> = () => {
	const { courseId } = useParams();
	const allCourses = useAppSelector(getCoursesSelector);
	const allAuthors = useAppSelector(getAuthorsSelector);
	const courseData = getCourseById(courseId, allCourses);
	const courseAuthors = getAuthorsById(courseData.authors, allAuthors);
	const initialFormState = courseId
		? {
				title: courseData.title,
				description: courseData.description,
				duration: courseData.duration,
		  }
		: {
				title: '',
				description: '',
				duration: null,
		  };

	const {
		title,
		description,
		duration,
		errors,
		inputChange,
		resetForm,
		validateForm,
	} = useForm(initialFormState, validationSchema);

	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const [chosenAuthors, setchosenAuthors] = useState<AuthorType[]>([]);

	const choseAuthor = (author: AuthorType) => {
		// Check if the author is already in the chosenAuthors array
		if (courseId) {
			setchosenAuthors(courseAuthors);
		}
		const isAuthorAlreadyChosen = chosenAuthors.some(
			(chosenAuthor) => chosenAuthor.id === author.id
		);

		if (!isAuthorAlreadyChosen) {
			// If the author is not already chosen, add it to the chosenAuthors array
			const updatedChosenAuthors = [...chosenAuthors, author];
			setchosenAuthors(() => updatedChosenAuthors);
		}
	};

	const deleteAuthor = (author: AuthorType) => {
		// Filter out the selected author from chosenAuthors array
		const updatedChosenAuthors = chosenAuthors.filter(
			(chosenAuthor) => chosenAuthor.id !== author.id
		);
		setchosenAuthors(() => updatedChosenAuthors);
	};

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		const isValid = await validateForm(); // Validate the form
		if (isValid) {
			const creationDate = new Date().toLocaleDateString();
			const AuthorsIds = chosenAuthors.map((author) => author.id);
			const newCourse = {
				title,
				description,
				duration: Number(duration),
				creationDate,
				authors: AuthorsIds,
			};

			try {
				if (courseId) {
					dispatch(updateCourseThunk({ newCourse, courseId }));
				} else {
					// If courseId is not present, it's a new course
					// Dispatch the addNewCourseThunk action
					dispatch(addNewCourseThunk(newCourse));
				}

				resetForm();
				navigate('/courses');
			} catch (error) {
				console.log(error);
			}
		} else {
			console.log(errors);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<FormHeader
				title={title}
				description={description}
				inputChange={inputChange}
				errors={errors}
			/>
			<div className='border border-primary-550 flex flex-row justify-between content-center my-8'>
				<div className='flex flex-col justify-between  w-6/12 p-6 gap-8'>
					<AuthorForm />

					<FormFooter
						duration={duration?.toString()}
						inputChange={inputChange}
						errors={errors}
					/>
				</div>
				<Authors
					chosenAuthors={chosenAuthors}
					deleteAuthor={deleteAuthor}
					choseAuthor={choseAuthor}
				/>
			</div>
		</form>
	);
};
export default CourseForm;

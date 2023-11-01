import React, { FC } from 'react';
//import Input from 'src/components/common/Input/Input';
import Button from 'src/components/common/Button/Button';
import { useForm } from 'src/components/hooks/useForm';
import * as Yup from 'yup';
//import { CoursesContext } from 'src/context/CourseContext';

const SearchBar: FC = () => {
	const validationSchema = Yup.object().shape({
		query: Yup.string()
			.min(2, 'Too Short!')
			.max(50, 'Too Long!')
			.required('Required'),
	});

	const { query, errors, inputChange, resetForm, validateForm } = useForm(
		{ query: '' },
		validationSchema
	);

	//const { queryCourses, setCourses, courses } = useContext(CoursesContext);

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		const isValid = await validateForm();

		if (isValid) {
			// Filter the courses based on the query
			//queryCourses(query);
			resetForm();
		} else {
			console.log(errors);
		}
	};

	/*const handleBlur = () => {
		// Reset the courses state to the original unfiltered array when input loses focus
		setCourses(courses);
	};*/

	return (
		<form className='flex flex-row gap-4 basis-6/12' onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='enter course name or id...'
				className=' border border-primary-550 flex-1 pl-2'
				value={query}
				onChange={inputChange}
			/>

			<Button buttonText='Search' type='submit' />
		</form>
	);
};

export default SearchBar;

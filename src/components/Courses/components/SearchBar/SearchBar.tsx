import React, { FC } from 'react';
import Button from 'src/components/common/Button/Button';

const SearchBar: FC = () => {
	return (
		<form className='flex flex-row gap-4 basis-6/12'>
			<input
				type='text'
				placeholder='enter course name or id...'
				className=' border border-primary-550 flex-1 pl-2'
			/>
			<Button buttonText='Search' />
		</form>
	);
};
export default SearchBar;

import React, { FC } from 'react';
import Img from '../../../../assets/logo.jpg';

const Logo: FC = () => {
	return (
		<figure className='centered-row gap-2'>
			<div>
				<img src={Img} alt='learn logo' />
			</div>
			<figcaption className='text-[32px] sub-header'>Courses</figcaption>
		</figure>
	);
};

export default Logo;

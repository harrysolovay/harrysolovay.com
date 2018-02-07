import './style.css'

import React from 'react'

import resume from '../assets/harry-solovay-resume.pdf'

const Links = () => (
	<div id='links' className='work-item clearfix'>
		<div className='clearfix'>
			<a id='gmail' href='mailto:harrysolovay@gmail.com'>harrysolovay@gmail.com</a>
		</div>
		<div className='clearfix'>
			<a id='linkedin' href='https://www.linkedin.com/in/harrysolovay' target='_blank' rel='noopener noreferrer'><i className='fa fa-linkedin' /></a>
			<a id='github' href='https://github.com/harrysolovay' target='_blank' rel='noopener noreferrer'><i className='fa fa-github' /></a>
			<a id='instagram' href='https://www.instagram.com/hsolvz/' target='_blank' rel='noopener noreferrer'><i className='fa fa-instagram' /></a>
		</div>
		<div className='clearfix'>
			<a id='resume' href={ resume } target='_blank' rel='noopener noreferrer'>View Resume</a>
		</div>
	</div>
)

export default Links

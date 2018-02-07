import './reset.css'
import './style.css'

import './header.css'
import './footer.css'

import React, { Component } from 'react'
import WebFont from 'webfontloader'
import GoogleAnalytics from 'react-ga'

import Work from '../work'

import resume from '../work/assets/harry-solovay-resume.pdf'

export default class App extends Component {

	constructor(props) {
		super(props)
		WebFont.load({
			typekit : {
				id : 'omj0hyx',
				classes : false,
				events: false
			}
		})
		GoogleAnalytics.initialize('UA-59189094-1')
	}

	render() {
    	return (
    		<div>
				<header className='clearfix'>
					<h1>Harry Solovay</h1>
					<h3>UX Designer &#x26; Futurism Nerd</h3>
				</header>
				<main>
					<Work />
				</main>
				<footer>
					<div className='download-links'>
						<a href={ resume } target='_blank'>Download Resume</a>
						<span>|</span>
						<a href='https://github.com/harrysolovay/harrysolovay.com'>View Source</a>
					</div>
					<div className='copyright'>Copyright &#169; 2017, Harry Solovay</div>
				</footer>
			</div>
		)
	}

}

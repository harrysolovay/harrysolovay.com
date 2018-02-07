import './style.css'

import React, { Component } from 'react'

export default class Filter extends Component {

	constructor(props) {
		super(props)
		this.handler = this.props.handler
	}

  	render() {
		return (
			<div id='filter' className='work-item'>
				<div className='clearfix'>
				
					<input type='radio' id='all-radio' name='filter' value='all' defaultChecked={ true } onChange={ (e) => { this.handler(e) } } />
					<label htmlFor='all-radio'>All</label>
					
					<input type='radio' id='research-radio' name='filter' value='research' onChange={ (e) => { this.handler(e) } } />
					<label htmlFor='research-radio'>Research</label>
					
					<input type='radio' id='ux-and-sites-radio' name='filter' value='ux and sites' onChange={ (e) => { this.handler(e) } } />
					<label htmlFor='ux-and-sites-radio'>UX &#x26; Sites</label>
					
					<input type='radio' id='other-radio' name='filter' value='other' onChange={ (e) => { this.handler(e) } } />
					<label htmlFor='other-radio'>Other</label>
					
				</div>
			</div>
		)
  	}
  	
}
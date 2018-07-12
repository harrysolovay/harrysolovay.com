import './style.css'

import React, { Component } from 'react'

export default class Filter extends Component {

  	render() {
		return (
			<div id='filter' className='work-item'>
				<div className='clearfix'>
				
					<input type='radio' id='all-radio' name='filter' value='ALL' defaultChecked={ true } onChange={ this.props.handler } />
					<label htmlFor='all-radio'>ALL</label>
					
					<input type='radio' id='dev-radio' name='filter' value='DEV' onChange={ this.props.handler } />
					<label htmlFor='dev-radio'>DEV</label>
					
					<input type='radio' id='research-radio' name='filter' value='RESEARCH' onChange={ this.props.handler } />
					<label htmlFor='research-radio'>RESEARCH</label>
					
					<input type='radio' id='etc-radio' name='filter' value='ETC' onChange={ this.props.handler } />
					<label htmlFor='etc-radio'>ETC</label>
					
				</div>
			</div>
		)
  	}
  	
}
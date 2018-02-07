import './style.css'

import React, { Component } from 'react'

export default class WorkItem extends Component {

  	render() {
		return (
			<a className='work-item clearfix' href={ this.props.redirectTo } target='_blank' rel='noopener noreferrer'>
				{ this.props.thumbnail &&
					<div className='thumbnail' style={{ backgroundImage : `url(${this.props.thumbnail})` }}></div>
				}
				<div className='details'>
					<div className='title'>{ this.props.title }</div>
					<div className='description'>{ this.props.description }</div>
					{ this.props.date &&
						<div className='date'> { this.props.date }</div>
					}
				</div>
			</a>
		)
  	}
  	
}
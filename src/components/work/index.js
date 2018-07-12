import './style.css'

import React, { Component } from 'react'

import Masonry from 'react-masonry-component'
import Filter from './filter'
import Links from './links'
import WorkItem from './work-item'

import reactNativeXBarThumbnail from './assets/react-native-x-bar-thumbnail.jpg'
import selfDesignedMajorThumbnail from './assets/self-designed-major-thumbnail.jpg'
import soflieThumbnail from './assets/soflie-thumbnail.jpg'
import susproduceThumbnail from './assets/susproduce-thumbnail.jpg'
import mcAndMentalHealthThumbnail from './assets/mc-and-mental-health-study-thumbnail.jpg'
import nextGenAAAThumbnail from './assets/nextgenaaa-thumbnail.jpg'
import futureOfSensationAndPerceptionThumbnail from './assets/future-of-sensation-and-perception-thumbnail.jpg'
import futureOfTheHumanMindThumbnail from './assets/future-of-the-human-mind-thumbnail.jpg'
import futureOfTheHumanBodyThumbnail from './assets/future-of-the-human-body-thumbnail.jpg'
import blastFromThePastAntiquesThumbnail from './assets/blast-from-the-past-antiques.jpg'
import musicThumbnail from './assets/music-thumbnail.jpg'
import blueTreeThumbnail from './assets/blue-tree-thumbnail.jpg'
import sinusitisSolutionsThumbnail from './assets/sinusitis-solutions-thumbnail.jpg'
import drawingsThumbnail from './assets/drawings-thumbnail.jpg'
import leagueappsRegistrationWidgetThumbnail from './assets/leagueapps-registration-widget-thumbnail.png'
import smartphonesPersonalityAndLifeSatisfactionThumbnail from './assets/smartphones-personality-and-life-satisfaction-thumbnail.jpg'

import selfDesignedMajor from './assets/self-designed-major.pdf'
import futureOfTheHumanMind from './assets/future-of-the-human-mind.pdf'
import futureOfTheHumanBody from './assets/future-of-the-human-body.pdf'
import futureOfSensationAndPerception from './assets/future-of-sensation-and-perception.pdf'
import mcAndMentalHealth from './assets/mc-and-mental-health-study.pdf'
import smartphonesPersonalityAndLifeSatisfaction from './assets/smartphones-personality-and-life-satisfaction.pdf'

export default class Work extends Component {

	state = {
		selectedFilter : 'ALL'
	}

	setNewFilter(newFilter) {
		this.setState({
			selectedFilter : newFilter.target.value
		}, () => {
			console.log(this.state.selectedFilter)
		})
	}

  	render() {
		return (
			<Masonry className='work clearfix' ref='masonry'>

				<div id='about' className='work-item clearfix'>
					<div className='details'>
						<div className='title'>About me</div>
						<div className='description'>I&#x27;m a UX designer, software developer and tech geek from New York City. I just graduated from Connecticut College, where I self-designed my major, &#x27;User Experience in Technology.&#x27; I love speaking with others who are fascinated by design and tech, so please reach out to me–even if it isn&#x27;t in regards to a project or job opportunity.</div>
					</div>
				</div>

				<Links />

				<Filter handler={ this.setNewFilter.bind(this) } />

    		{
					[
						{
							thumbnail : smartphonesPersonalityAndLifeSatisfactionThumbnail,
							title : 'Smartphones, Personality and Life Satisfaction',
							redirectTo : smartphonesPersonalityAndLifeSatisfaction,
							description : `This is my two-part (part case, part correlational) senior integrative research on smartphone addiction. Read for a window into the relationship between college students and their digital companions.`,
							date : 'May 2018',
      				type : 'RESEARCH'
						},
						{
							thumbnail : reactNativeXBarThumbnail,
							title : 'React Native X Bar',
							redirectTo : 'https://github.com/harrysolovay/react-native-x-bar',
							description : `I created and published this open source node module. React Native developers can use this "flexible, lightweight bar component for common UI patterns"`,
							date : 'March 2018',
      				type : 'DEV'
						},
						{
							thumbnail : selfDesignedMajorThumbnail,
							title : 'The major I created',
							redirectTo : selfDesignedMajor,
							description : 'My self-designed major has been officially approved by Connecticut College. The Major is called \x27User Experience in Technology\x27 and synthesizes Computer Science, Psychology and Philosophy coursework through app development projects and research on technology addiction.',
							date : 'June 17th, 2017 (date of official approval)',
							type : 'RESEARCH'
						},
						{
							thumbnail : mcAndMentalHealthThumbnail,
							title : 'Mobile Computing \x26 Mental Health',
							redirectTo : mcAndMentalHealth,
							description : 'I conducted this study on the implications of mobile computing use on mental health. 77 participants completed psychological batteries representing their depression, self-esteem, and level of phone addiction. They also reported the amount of weekly time spent on Snapchat, Instagram, Facebook, and Email. The findings of this research are so shocking that I switched to a dumb phone from 10 years ago.',
							date : 'December 2017',
							type : 'RESEARCH'
						},
						{
							thumbnail : nextGenAAAThumbnail,
							title : 'NextGen AAA Foundation Website',
							redirectTo : 'http://nextgenaaa.org',
							description : 'The NextGen AAA Foundation aims to \x27provide mentoring, education, and hockey programs to diverse, low-income, and at-risk youth thoughout the United States.\x27 I built a custom WordPress site for the launch of this charity. Great team, great cause... it doesn\x27t get much better than that.',
							date : 'October 2017',
							type : 'DEV'
						},

						{
							thumbnail : futureOfSensationAndPerceptionThumbnail,
							title : 'Future of Sensation and Perception',
							redirectTo : futureOfSensationAndPerception,
							description : 'Do we experience a representative, true version of our existence? Research in psychology and the emerging landscape of biotechnology and computing pave the way for radical improvements to sensation and perception. This literature review dives into the underlaying cognitive processes, possibilities, and their implications.',
							date : 'December 2017',
							type : 'RESEARCH'
						},

						{
							thumbnail : susproduceThumbnail,
							title : 'SUSPRODUCE',
							redirectTo : 'http://susproduce.com',
							description : 'is a platform for my friends and collaborators (who I lovingly call \x27suspects\x27) to share and sell their work (fashion and prints as of right now). If you want to showcase your work on SUSPRODUCE, send an email to susproduce@gmail.com and we\x27ll get back to you shortly.',
							date : 'Ongoing',
							type : 'DEV'
						},

						{
							thumbnail : leagueappsRegistrationWidgetThumbnail,
							title : 'LeagueApps Embeddable Registration Listings Widget',
							redirectTo : 'https://bitbucket.org/leagueapps/registration-widget-summer-2017',
							description : 'LeagueApps needed a way to allow clients to display camp, league, and team registration listings on their own sites. I created this widget so that clients could copy and paste a single line of code to generate a listings component with sorting, filtration, and more.',
							date : 'Summer 2017',
							type : 'DEV'
						},

						{
							thumbnail : futureOfTheHumanMindThumbnail,
							title : 'Future of the Human Mind',
							redirectTo : futureOfTheHumanMind,
							description : 'The Technological Singularity matures as mobile computing and other advancement make individuals increasingly hive-minded with one another. Is this a positive step in our evolution? What considerations could help us safeguard against catastrophe?',
							date : 'December 2016',
							type : 'RESEARCH'
						},

						{
							thumbnail : musicThumbnail,
							title : 'Solved Beats (My Electronic Music)',
							redirectTo : 'https://soundcloud.com/solved1',
							description : 'I use Logic Pro X to produce music. My productions usually fall somewhere between Trap and Synth-pop. Music is one of my \x27side hustles.\x27',
							date : 'Ongoing',
							type : 'ETC'
						},

						{
							thumbnail : futureOfTheHumanBodyThumbnail,
							title : 'Future of the Human Body',
							redirectTo : futureOfTheHumanBody,
							description : 'My research on past and present body modification suggests an auspicious future of biotechnological power. How might we modify the vessels through which we experience life and what are the implications?',
							date : 'December 2016',
							type : 'RESEARCH'
						},

						{
							thumbnail : blastFromThePastAntiquesThumbnail,
							title : 'Blast from the Past Online Gallery',
							redirectTo : 'http://theblastfromthepastantiques.com/collection/',
							description : 'I created this custom WordPress site for a rare antiques collector from the Upper East Side of Manhattan. The site showcases but one hundred pieces of glassware from his thousand-item collection.',
							date : 'Coming soon (once I have the product data)',
							type : 'DEV'
						},

						{
							thumbnail : blueTreeThumbnail,
							title : 'Blue Tree Online Store',
							redirectTo : 'http://bluetreeny.bigcartel.com/hello',
							description : 'Located between 91st and 92nd on Madison Avenue, Blue Tree is the perfect place to find sleek fashion items, home decorations and gifts. The amount of thought that goes into their product selection is staggering. I created a custom CSS skin for this store\x27s Big Cartel site.',
							date : 'August 2015',
							type : 'DEV'
						},

						{
							thumbnail : soflieThumbnail,
							title : 'Soflié Online Store',
							redirectTo : 'https://soflié.com',
							description : '\x22In pursuit of slow and sustainable fashion,\x22 my friend Sophie Xue has created a gorgeous line of Winter coats. I worked on her Wordpress site to give it a look and feel that would compliment her elegant products.',
							date : 'December 2017',
							type : 'DEV'
						},

						{
							thumbnail : sinusitisSolutionsThumbnail,
							title : 'Sinusitis Solutions Website',
							redirectTo : 'http://www.sinusitis-solutions.com',
							description : 'Dr. Vijay Anand runs a medical practice on Park Avenue and 73rd Street. He needed a website to promote his ENT health services, but also wanted to provide information to those looking to educate themselves about ENT conditions.',
							date : 'August 2015',
							type : 'DEV'
						},
						{
							thumbnail : drawingsThumbnail,
							title : 'Some of my drawings',
							redirectTo : 'https://www.behance.net/harrysolov7cd3',
							description : 'I scribble from time to time. My two greatest drawing inspirations are M. C. Escher and René Magritte',
							date : 'Ongoing',
							type : 'ETC'
						}
					].map((workItem, id) => (
						(
							this.state.selectedFilter === 'ALL' ||
							this.state.selectedFilter === workItem.type
						) ? (
							<WorkItem
								{ ...workItem }
								type={ workItem.type }
								key={ id }
							/>
						) : null
					))
    		}

			</Masonry>
		)
  	}

  	componentDidMount() {
  		setTimeout(() => this.refs.masonry.performLayout(), 1000)
  	}

}

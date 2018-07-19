import React, { Fragment } from 'react'
import { MasonryItemStyle } from 'components'
import styles from './styles.module.scss'
import { Anchor } from 'components'

export default () => (
  <div className={ [styles.container, MasonryItemStyle].join(' ') }>
    <div>
      <div className={ styles.header }>
        About Me
      </div>
      <div className={ styles.bio }>
        { `I'm a software developer and ` }
        <Anchor
          href='https://soundcloud.com/solved1'
          children={
            <Fragment>
              { `electronic beat-maker` }
              <img
                src={ require('assets/images/soundcloud-logo.svg') }
                className={ styles.soundCloudLogo }
                alt='SoundCloud Logo'
              />
            </Fragment>
          }
        />
        { ` from New York City. I just graduated from Connecticut College, where I self-designed my major, ` }
        <Anchor
          href={ require('assets/portfolio/self-designed-major/harry-solovay-self-designed-major.pdf') }
          children={ `"User Experience in Technology"` }
        />
        { ` (a synthesis of Computer Science, Psychology & Philosophy). I love the open source community, ReactJS` }
        <img
          src={ require('assets/images/reactjs-logo.svg') }
          className={ styles.reactJSLogo }
          alt='ReactJS Logo'
        />
        { `, NodeJS` }
        <img
          src={ require('assets/images/nodejs-logo.svg') }
          className={ styles.nodeJSLogo }
          alt='NodeJS Logo'
        />
        { ` and its ecosystem` }
        <img
          src={ require('assets/images/npm-logo.svg') }
          className={ styles.npmLogo }
          alt='NPM Logo'
        />
        { `. I also love speaking with others who are fascinated by tech and UX, so please reach out to me–even if it isn't in regards to a project or job opportunity.` }
      </div>
    </div>
  </div>
)
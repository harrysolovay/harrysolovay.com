import React from 'react'
import { MasonryItem } from 'components'
import styles from './styles.module.scss'
import { Anchor } from 'components'

export default () => (
  <MasonryItem>
    <div className={ styles.container }>
      <div>
        <div className={ styles.header }>
          About Me
        </div>
        <div className={ styles.bio }>
          { `I'm a full-stack javascript developer from New York City. I recently graduated Connecticut College, where I self-designed my major, ` }
          <Anchor
            href={ require('assets/portfolio/self-designed-major/harry-solovay-self-designed-major.pdf') }
            children={ `"User Experience in Technology"` }
          />
          { ` (a synthesis of Computer Science and Psychology). I love the open source community, ` }
          <Anchor
            href='https://reactjs.org'
            children={ `ReactJS` }
            className={ styles.noUnderline }
          />
          <Anchor
            href='https://reactjs.org'
            children={
              <img
                src={ require('assets/images/reactjs-logo.svg') }
                className={ styles.reactJSLogo }
                alt='ReactJS Logo'
              />
            }
          />
          { `, and ` }
          <Anchor
            href='https://nodejs.org/en/'
            children={ `NodeJS` }
            className={ styles.noUnderline }
          />
          <Anchor
            href='https://nodejs.org/en/'
            children={
              <img
                src={ require('assets/images/nodejs-logo.svg') }
                className={ styles.nodeJSLogo }
                alt='NodeJS Logo'
              />
            }
          />
          { `. I also love speaking with others who are fascinated by tech and UX, so please reach out–even if it isn't in regards to a project or job opportunity.` }
        </div>
      </div>
    </div>
  </MasonryItem>
)
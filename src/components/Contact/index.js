import React from 'react'
import { MasonryItem } from 'components'
import styles from './styles.module.scss'
import { Anchor } from 'components'

export default () => (
  <MasonryItem>
    <div className={ styles.container }>
      <Anchor
        href='mailto:harrysolovay@gmail.com'
        className={ styles.email }
        children='harrysolovay@gmail.com'
      />
      <div className={ styles.socialLinks }>
        <Anchor
          href='https://www.linkedin.com/in/harrysolovay/'
          className={ styles.linkedIn }
          children={
            <img
              src={ require('assets/images/linkedin-logo.svg') }
              alt='LinkedIn Logo'
            />
          }
        />
        <Anchor
          href='https://github.com/harrysolovay'
          className={ styles.gitHub }
          children={
            <img
              src={ require('assets/images/github-logo.svg') }
              alt='GitHub Logo'
            />
          }
        />
        <Anchor
          href='https://www.instagram.com/hsolvz/'
          className={ styles.instagram }
          children={
            <img
              src={ require('assets/images/instagram-logo.svg') }
              alt='Instagram Logo'
            />
          }
        />
      </div>
      <Anchor
        href={ require('assets/harry-solovay-resume.pdf') }
        className={ styles.resume }
        children='view resume'
      />
    </div>
  </MasonryItem>
)
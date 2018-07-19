import React from 'react'
import { MasonryItemStyle } from 'components'
import styles from './styles.module.scss'
import { Anchor } from 'components'

export default () => (
  <div className={ [styles.container, MasonryItemStyle].join(' ') }>
    <div>
      <Anchor
        href='mailto:harrysolovay@gmail.com'
        className={ styles.email }
        children='harrysolovay@gmail.com'
      />
      <div className={ styles.socialLinks }>
        <Anchor
          href='https://github.com/harrysolovay'
          className={ styles.linkedIn }
          children={ <i className='fa fa-linkedin' /> }
        />
        <Anchor
          href='https://www.linkedin.com/in/harrysolovay/'
          className={ styles.gitHub }
          children={ <i className='fa fa-github' /> }
        />
        <Anchor
          href='https://www.instagram.com/hsolvz/'
          className={ styles.instagram }
          children={ <i className='fa fa-instagram' /> }
        />
      </div>
      <Anchor
        href={ require('assets/harry-solovay-resume.pdf') }
        className={ styles.resume }
        children='view resume'
      />
    </div>
  </div>
)
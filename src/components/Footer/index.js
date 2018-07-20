import React from 'react'
import styles from './styles.module.scss'
import { Anchor } from 'components'

export default () => (
  <footer className={ styles.container }>
    <div className={ styles.links }>
      <Anchor href={ require('assets/harry-solovay-resume.pdf') }>View Resume</Anchor>
      <div>|</div>
      <Anchor href='https://github.com/harrysolovay/harrysolovay.com'>View Site Source</Anchor>
    </div>
    <div className={ styles.copyright }>
      { `Copyright © ${ (new Date()).getFullYear() }, Harry Solovay` }
    </div>
  </footer>
)
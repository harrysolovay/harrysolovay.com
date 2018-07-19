import React from 'react'
import styles from './styles.module.scss'

export default () => (
  <header className={ styles.header }>
    <div className={ styles.title }>Harry Solovay</div>
    <div className={ styles.subtitle }>
      { `UX Designer, Dev., Futurism Nerd` }
    </div>
  </header>
)
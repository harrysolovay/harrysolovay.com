import React from 'react'
import styles from './styles.module.scss'

export default (props) => (
  <div
    className={ styles.container }
    { ...props }
  />
)
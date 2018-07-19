import React from 'react'
import { Anchor } from 'components'
import { MasonryItemStyle } from 'components'
import styles from './styles.module.scss'

export default ({
  url,
  image,
  title,
  description,
  date
}) => (
  <Anchor
    className={ [styles.container, MasonryItemStyle].join(' ') }
    href={ url }
  >
    <div>
      <div
        className={ styles.image }
        style={{ backgroundImage: `url(${ image })` }}
      />
      <div className={ styles.details }>
        <div className={ styles.title }>{ title }</div>
        <div className={ styles.description }>{ description }</div>
        <div className={ styles.date }>{ date }</div>
      </div>
    </div>
  </Anchor>
)
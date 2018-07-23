import React from 'react'
import { Anchor } from 'components'
import { MasonryItem } from 'components'
import styles from './styles.module.scss'

export default ({
  url,
  thumbnail,
  title,
  description,
  date,
}) => (
  <MasonryItem>
    <Anchor
      className={ styles.container }
      href={ url }
    >
      <div>
        <div
          className={ styles.thumbnail }
          style={{ backgroundImage: `url(${ thumbnail })` }}
        />
        <div className={ styles.details }>
          <div className={ styles.title }>{ title }</div>
          <div className={ styles.description }>{ description }</div>
          <div className={ styles.date }>{ date }</div>
        </div>
      </div>
    </Anchor>
  </MasonryItem>
)
import React from 'react'
import { MasonryItem } from 'components'
import styles from './styles.module.scss'

export const categories = [ 'ALL', 'DEV', 'RESEARCH', 'ETC', ]

export default ({ onClick, activeCategory }) => (
  <MasonryItem>
    <div className={ styles.container }>
      {
        categories.map(category => (
          <div
            key={ category }
            { ...{ category } }
            onClick={ () => onClick(category) }
            children={ category }
            className={
              category === activeCategory
                ? styles.active
                : styles.category
            }
          />
        ))
      }
    </div>
  </MasonryItem>
)
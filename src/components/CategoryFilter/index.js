import React from 'react'
import { MasonryItemStyle } from 'components'
import styles from './styles.module.scss'
import shortid from 'shortid'

export const categories = [ 'ALL', 'DEV', 'RESEARCH', 'ETC', ]

export default ({ onClick, activeCategory }) => (
  <div className={ [styles.container, MasonryItemStyle].join(' ') }>
    <div>

      {
        categories.map(category => (
          <div
            key={ shortid.generate() }
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
  </div>
)
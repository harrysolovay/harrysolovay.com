import React from 'react'
import { MasonryItemStyle } from 'components'
import styles from './styles.module.scss'
import { Anchor } from 'components'

export default () => (
  <div className={ [styles.container, MasonryItemStyle].join(' ') }>
    <div>
      <div className={ styles.header }>
        About Me
      </div>
      <div className={ styles.bio }>
        { `I'm a UX designer, software developer and music producer from New York City. I just graduated from Connecticut College, where I self-designed ` }
        <Anchor
          href={ require('assets/portfolio/self-designed-major/harry-solovay-self-designed-major.pdf') }
          children={ `my major, "User Experience in Technology"` }
        />
        { ` (a synthesis of Computer Science, Psychology & Philosophy). The open source community and ReactJS ecosystem are very dear to me. I love speaking with others who are fascinated by design and tech, so please reach out to me–even if it isn't in regards to a project or job opportunity.` }
      </div>
    </div>
  </div>
)
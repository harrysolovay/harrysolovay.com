import 'normalize.css'
import React, { Component } from 'react'
import { Header, Section, About, Contact, CategoryFilter, PortfolioItem, Footer } from 'components'
import Masonry from 'react-masonry-component'
import styles from './styles.module.scss'
import portfolioItems from 'assets/portfolio'
import shortid from 'shortid'
import WebFont from 'webfontloader'
import ReactDOM from 'react-dom'
import registerServiceWorker from 'utilities/registerServiceWorker'

class App extends Component {

  state = {
    category: 'ALL',
  }

  render() {
    return (
      <div>

        <Header />

        <Section>
          <div className={ styles.masonry }>
            <Masonry
              ref={ this.setMasonryRef }
            >

              <About />

              <Contact />

              <CategoryFilter
                onClick={ this.categoryFilterOnClick }
                activeCategory={ this.state.category }
              />

              {
                portfolioItems.map(props => (
                  (
                    props.category === this.state.category ||
                    this.state.category === 'ALL'
                  ) ? (
                      <PortfolioItem
                        key={ shortid.generate() }
                        { ...props }
                      />
                    )
                  : null
                ))
              }

            </Masonry>
          </div>
        </Section>

        <Footer/>

      </div>
    )
  }

  componentDidMount = () => {

    WebFont.load({
			typekit : {
				id : 'omj0hyx',
				classes : false,
				events: false,
			},
    })

    // fix masonry item overlap bug
    window.dispatchEvent(
      new Event('resize')
    )

  }

  categoryFilterOnClick = (category) => {
    this.setState({ category })
  }
  
}

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()

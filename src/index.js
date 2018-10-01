import 'normalize.css'
import React, { Component } from 'react'
import { Header, Section, About, Contact, CategoryFilter, PortfolioItem, Footer } from 'components'
import Masonry from 'react-masonry-component'
import styles from './styles.module.scss'
import portfolioItems from 'assets/portfolio'
import WebFont from 'webfontloader'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { hydrate, render } from 'react-dom'

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
            <Masonry ref={ this.setMasonryRef }>

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
                        key={ props.title }
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
			typekit: {
				id: 'omj0hyx',
				classes: false,
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

const AppWith404Prevention = () => (
  <Router>
    <Route path='*' component={ App } />
  </Router>
)

const rootElement = document.getElementById('root')
if(rootElement.hasChildNodes()) {
  hydrate(<AppWith404Prevention />, rootElement)
} else {
  render(<AppWith404Prevention />, rootElement)
}
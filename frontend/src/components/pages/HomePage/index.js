// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import { Header, Tags, Information, Footer, About } from 'components'
import { Link } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { searchValue: '' }
  }

  render() {
    return (
      <div>
        <Header />
        <div className="home-search-wrapp">
          <div className="home-search">
            <div className="home-search-text">
              <p>Вам нужна помощь с...</p>
            </div>
            <div className="home-form">
              <form method="post" action="">
                <input type="text" name="search-str" id="search-str" onChange={e => this.setState({ searchValue: e.target.value })} />
                <Link to={{ pathname: '/search', state: this.state.searchValue }}><button type="submit">fsdf</button></Link>
              </form>
            </div>
          </div>
        </div>
        <Tags />
        <Information />
        <About />
        <Footer />
      </div>
    )
  }
}

export default HomePage

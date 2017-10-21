// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import { Header, Tags, Information, Footer } from 'components'
import { Link } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'

injectGlobal`

`
const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="home-search">
        <div className="home-search-text">
          <p>Do you need help with...</p>
        </div>
        <input />
        <Link to="/search"><button>GO</button></Link>
      </div>
      <Tags />
      <Information />
      <Footer />
    </div>
  )
}

export default HomePage

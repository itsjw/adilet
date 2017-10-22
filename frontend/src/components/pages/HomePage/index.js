// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import { Header, Tags, Information, Footer, About} from 'components'
import { Link } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

const HomePage = () => {
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
              <input type="text" name="search-str" id="search-str"/>
               <Link to="/search"><button type="submit">fsdf</button></Link>
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

export default HomePage

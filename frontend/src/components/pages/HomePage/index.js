// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import { Header, Tags, Information, Footer } from 'components'
import { Link } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'

injectGlobal`
  .home-search{
    font-family: 'Open Sans', sans-serif;
    display: table;
    margin: 0 auto;
    margin: 100px auto;
    margin-bottom: 150px;
  }
  .home-search input{
    width:550px;
    height:65px;
    border:none;
    background-color:#e8e8e8;
    color:white;
  }
  .home-search button{
    width:67px;
    border:none;
    height:67px;
    background-color:#46c25f;
  }
  .home-search-text{

  }
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

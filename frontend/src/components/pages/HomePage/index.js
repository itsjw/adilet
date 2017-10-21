// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import { Header, Tags, Information, Footer } from 'components'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <Header />
      <div>
        <input placeholder="govno" />
        <Link to="/search"><button>GO</button></Link>
      </div>
      <Tags />
      <Information />
      <Footer />
    </div>
  )
}

export default HomePage

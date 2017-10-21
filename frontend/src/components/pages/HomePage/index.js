// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import { Header, Tags, Information, Footer } from 'components'
import { Search } from 'containers'

const HomePage = () => {
  return (
    <div>
      <Header />
      <Search />
      <Tags />
      <Information />
      <Footer />
    </div>
  )
}

export default HomePage

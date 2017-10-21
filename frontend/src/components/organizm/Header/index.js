import React from 'react'
import {injectGlobal} from 'styled-components'

injectGlobal`

`

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src="logo.svg" alt="" />
      </div>
      <div className="header-text">
        <h1>Header-block</h1>
        <p>Don't get me wrong. I'll speak more deeply,<br/>
         in a blog post. In short, ARc exists because <br/>
         another project: I had a 3 months,<br/>
         but I spent so much time </p>
      </div>
    </div>
  )
}

Header.propTypes = {}

export default Header

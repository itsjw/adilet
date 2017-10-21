import React from 'react'
import {injectGlobal} from 'styled-components'

injectGlobal`
  .header{
    height:400px;
    max-height:400px;
    padding:0 140px;
    font-family: 'Open Sans', sans-serif;
    display: flex;
    text-transform:uppercase;
    justify-content: space-between;
    background-image: url(banner.png);
    background-position: center center;
    background-size: cover;
    color:#fff;
  }
  .header-text{
    margin:auto 0;
    width: 400px;
    text-align: right;
  }
  .header-logo{
      margin:auto 0;
  }
  .header-logo img {
    width:150px;
    margin-bottom:50px;
  }
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

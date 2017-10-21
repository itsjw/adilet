import React from 'react'
import {injectGlobal} from 'styled-components'

injectGlobal`
  .header{
    padding:0 40px;
    margin: 0;
    height: auto;
    display: flex;
    justify-content: space-between;
    background: rgb(181,189,200);
    background: -moz-linear-gradient(top, rgba(181,189,200,1) 0%, rgba(130,140,149,1) 36%, rgba(40,52,59,1) 100%);
    background: -webkit-linear-gradient(top, rgba(181,189,200,1) 0%,rgba(130,140,149,1) 36%,rgba(40,52,59,1) 100%);
    background: linear-gradient(to bottom, rgba(181,189,200,1) 0%,rgba(130,140,149,1) 36%,rgba(40,52,59,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b5bdc8', endColorstr='#28343b',GradientType=0 );
  }
  .header-text{
    width: 400px;
    text-align: right;
    height: 300px
  }
  .header-logo{

  }
`

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <h1>Header-block</h1>
      </div>
      <div className="header-text">
        <h1>Header-block</h1>
        <p>Don't get me wrong. I'll speak more deeply about it in the near future,
         in a blog post. In short, ARc exists because I failed on another project: I had a 3 months deadline,
         but I spent so much time dedicating myself to the code, refactoring it and researching approaches in
         pursuit of the best possible structure that I ended up with no project at all, that was just an ugly
         page with a list of images.</p>
      </div>
    </div>
  )
}

Header.propTypes = {}

export default Header

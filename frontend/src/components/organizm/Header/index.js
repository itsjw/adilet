import React from 'react'

const Header = () => {
  return (
    <div className="container">
    <div className="header">
      <div className="header-logo">
        <img src="adilet.svg" alt="" />
      </div>
      <div className="header-links">
        <li><a href="#">About us</a></li>
        <li><a href="#">Education</a></li>
        <li><a href="#">Footer</a></li>
      </div>
      <button type="button">
        +
      </button>
      </div>
    </div>
  )
}

Header.propTypes = {}

export default Header

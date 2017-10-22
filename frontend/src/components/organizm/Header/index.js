import React from 'react'

const Header = () => {
  return (
    <div className="header">
    <div className="container">
      <div className="header-logo">
        <img src="adilet.svg" alt="" />
      </div>
      <div className="header-links">
        <li><a href="#">О нас</a></li>
        <li><a href="#">Сотрудничество</a></li>
        <li className="header-langs">
          <a className="active" href="#">KG</a>
          <a href="#">RU</a>
        </li>
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

import React from 'react'
import {injectGlobal} from 'styled-components'

injectGlobal`
  .footer{
    height: auto;
    margin: 0;
  }
  .copyright{
    background-color: grey;
    width: 40px;
    padding: 5px;
  }
  .footer-links, .footer-contacts, .footer-map{
    display: table-row;
    margin-bottom: 20px;
    padding: 10px;
    align-items: left;
  }
`

const Footer = () => {
  return (
    <div className="footer">
      <hr></hr>
      <div className="footer-links col-lg-4 col-sm-12">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
        <a href="#">Link 4</a>
        <a href="#">Link 5</a>
        <a href="#">Link 6</a>
      </div>
      <div className="footer-contacts col-lg-4 col-sm-12">
        <a href="#">Contacts-Link 1</a>
        <a href="#">Contacts-Link 2</a>
        <a href="#">Contacts-Link 3</a>
        <a href="#">Contacts-Link 4</a>
        <a href="#">Contacts-Link 5</a>
        <a href="#">Contacts-Link 6</a>
      </div>
      <div className="footer-map col-lg-4 col-sm-12">
        <a href="#">Map-Link 1</a>
        <a href="#">Map-Link 2</a>
        <a href="#">Map-Link 3</a>
        <a href="#">Map-Link 4</a>
        <a href="#">Map-Link 5</a>
      </div>
      <div className="copyright col-lg-12">
        blablablablakek
      </div>
    </div>
  )
}

Footer.propTypes = {}

export default Footer

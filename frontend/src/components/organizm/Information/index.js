import React from 'react'
import { injectGlobal } from 'styled-components'

injectGlobal`
.information{
}
padding-bottom: 50px;
.information-item{
  text-align: left;
}
.information-headr{
  margin-bottom: 20px;
}
.information-categories{
  width: 500px;
}
.information-small-items{
  margin-bottom: 20px;
}

`

const Information = () => {
  return (
    <div className="information">
      <div className="container">

        <div className="information-item col-ls-6 col-sm-12">
          <div className="information-headr">
            <h1>Header - information</h1>
          </div>
          <div className="information-item-icon">
            <img src="images/information-icon.svg" alt="" />
          </div>
        </div>

        <div className="information-item col-ls-6 col-sm-12">
          <div className="information-headr">
            <h1>Header - information</h1>
          </div>
          <div className="information-categories">
            <div className="information-small-items">
              <img src="images/" alt="" />
              <p>lorem kek lol</p>
            </div>
            <div className="information-small-items">
              <img src="images/" alt="" />
              <p>lorem kek lol</p>
            </div>
            <div className="information-small-items">
              <img src="images/" alt="" />
              <p>lorem kek lol</p>
            </div>
            <div className="information-small-items">
              <img src="images/" alt="" />
              <p>lorem kek lol</p>
            </div>
            <div className="information-small-items">
              <img src="images/" alt="" />
              <p>lorem kek lol</p>
            </div>
            <div className="information-small-items">
              <img src="images/" alt="" />
              <p>lorem kek lol</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Information

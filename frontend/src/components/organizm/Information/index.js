import React from 'react'
import { injectGlobal } from 'styled-components'

injectGlobal`
.information{
}
padding-bottom: 50px;
.information-item{
  text-align: left;
}
.information-categories{
  float:right;
  text-align:right;
}
.information-header{
  margin-bottom: 20px;
  text-align: center;
}
.information-item-icon {
  width: 100%;
}
.information-item-icon img {
  width: 150px;
  margin:0 40%;
}
.information-item{
  width: 100%;
}
.information-categories{
  width: 100%;
}
.information-small-items{
  margin-bottom: 20px;
}

`

const Information = () => {
  return (
    <div className="information">
      <div className="container">
      <div className="row">

        <div className="information-item col-lg-6 col-sm-12">
          <div className="information-header">
            <h1>Blablblablablabl valdvsavl</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Asperiores optio a laborum, aliquam quaerat ut impedit quae
            doloremque veniam officia porro eligendi quisquam iure quo hic laboriosam sed
            consectetur. Vero.</p>
          </div>
          <div className="information-item-icon">
              <img src="education.svg" alt="" />
          </div>
        </div>

        <div className="information-item col-lg-6 col-sm-12">
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
    </div>
  )
}

export default Information

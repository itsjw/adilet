import React from 'react'
import { injectGlobal } from 'styled-components'

injectGlobal`


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

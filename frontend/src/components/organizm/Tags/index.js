import React from 'react'
import {injectGlobal} from 'styled-components'

injectGlobal`
.tags{
  margin:0;
  height: auto;
  margin-bottom: 80px;
}
.tags-item{
  font-family: 'Open Sans', sans-serif;
  font-size:16px;
  margin-bottom: 30px;
  height: 50px;
  background-color: lightgreen;
  border-radius: 30px;
  text-align:center;
  margin-right: 20px;
}
`

const Tags = () => {
  return (
    <div className="tags">
      <div className="tags-items">
      <div className="container">

      <div className="row">
        <div className="tags-item col-lg-2">
          <p>keker</p>
        </div>
        <div className="tags-item col-lg-1">
          <p>lolol</p>
        </div>
        <div className="tags-item col-lg-4">
          <p>govno s percom</p>
        </div>
        <div className="tags-item col-lg-2">
          <p>furrrva</p>
        </div>
        <div className="tags-item col-lg-2">
          <p>piezdola</p>
        </div>
        </div>
        <div className="row">
        <div className="tags-item col-lg-2">
          <p>keker suka</p>
        </div>
        <div className="tags-item col-lg-3">
          <p>keker bliat</p>
        </div>
        <div className="tags-item col-lg-2">
          <p>superman</p>
        </div>
        <div className="tags-item col-lg-2">
          <p>kal el</p>
        </div>
        <div className="tags-item col-lg-2">
          <p>keker mmmm</p>
        </div>
        </div>
        <div className="row">
        <div className="tags-item col-lg-2">
          <p>keker</p>
        </div>
        <div className="tags-item col-lg-1">
          <p>lolol</p>
        </div>
        <div className="tags-item col-lg-4">
          <p>govno s percom</p>
        </div>
        <div className="tags-item col-lg-2">
          <p>furrrva</p>
        </div>
        <div className="tags-item col-lg-2">
          <p>piezdola</p>
        </div>
        </div>

      </div>
      </div>
    </div>
  )
}

export default Tags

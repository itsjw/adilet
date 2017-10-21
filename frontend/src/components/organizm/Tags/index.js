import React from 'react'
import {injectGlobal} from 'styled-components'

injectGlobal`
.tags{
  margin:0;
  height: auto;
}
.tags-item{
  margin-bottom: 30px;
  max-width: 200px;
  height: 40px;
  border-radius: 30px;
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
        <div className="tags-item col-lg-2">
          <p>lolol</p>
        </div>
        <div className="tags-item col-lg-3">
          <p>govno s percom</p>
        </div>
        <div className="tags-item col-lg-2">
          <p>furrrva</p>
        </div>
        <div className="tags-item col-lg-2">
          <p>piezdola</p>
        </div>
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
        
      </div>
      </div>
    </div>
  )
}

export default Tags

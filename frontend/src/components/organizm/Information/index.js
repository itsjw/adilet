import React from 'react'


const Information = () => {
  return (
    <div className="information">
      <div className="container">
      <div className="row">

        <div className="information-item col-lg-12 col-sm-12">
          <div className="information-header">
            <h1>ОБУЧЕНИЕ</h1>
            <p>Наш проект нацелен вдохновить граждан Кыргызской Республики на изучения своих юридических прав. Ниже представлены категории, где вы сможете найти статьи о сложном на просто языке.</p>
          </div>
        </div>

        <div className="information-item col-lg-12 col-sm-12">
          <div className="information-categories">
            <div className="information-small-items col-sm-12 col-md-2 col-xs-12">
              <img src="violence.svg" alt="" />
              <p>насилие</p>
            </div>
            <div className="information-small-items col-sm-12 col-md-2 col-xs-12">
              <img src="criminal.svg" alt="" />
              <p>уголовное право</p>
            </div>
            <div className="information-small-items col-sm-12 col-md-2 col-xs-12">
              <img src="rights.svg" alt="" />
              <p>права человека</p>
            </div>
            <div className="information-small-items col-sm-12 col-md-2 col-xs-12">
              <img src="family.svg" alt="" />
              <p>семейное право</p>
            </div>
            <div className="information-small-items col-sm-12 col-md-2 col-xs-12">
              <img src="court.svg" alt="" />
              <p>судопроизводство</p>
            </div>
          </div>
        </div>


        </div>
      </div>
    </div>
  )
}

export default Information

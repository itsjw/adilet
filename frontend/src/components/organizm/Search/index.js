import React from 'react'
import PropTypes from 'prop-types'


class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: '',
    }
  }

  componentDidUpdate = () => {
    this.props.getSearchResult(this.state.searchValue)
  }

  handleSearchChange = (e) => {
    this.setState({ searchValue: e.target.value })
  }

  render() {
    console.log(this.props)
    return (
      <div>

      <div className="container">
      <div className="header">
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

        <div className="container">
        <div className="search-content">
        <div className="search-header">
          <h1>Результаты поиска по запросу "Насилие"</h1>
        </div>
          <div className="search-content-item">
            <div className="search-item-header">
              Какие права у меня есть, если меня арестовали?
            </div>
            <div className="search-item-text">
              <p>Согласно правам и свободам гражданина Кыргызской Ресупблики, у каждого арестованного человека есть права...</p>
            </div>
          </div>
          <div className="search-content-item">
            <div className="search-item-header">
              Где я могу получить юридическую помощь
            </div>
            <div className="search-item-text">
            если я испытываю насилие со стороны партнера?В первую очередь, в случае насилия постарайтесь обезопасить себя...
            </div>
          </div>
          <div className="search-content-item">
            <div className="search-item-header">
            Как определить место жительства ребенка при разводе?
            </div>
            <div className="search-item-text">
            Согласно статье 25 Семейного кодекса КР, вопросы, разрешаемые судом при вынесении решения о расторжении брака.
            </div>
          </div>
          <div className="search-content-item">
            <div className="search-item-header">
            </div>
            <div className="search-item-text">
            </div>
          </div>
        </div>
        </div>

      <div className="container">
      <div className="footer">
        <div className="footer-l">
        <div className="footer-links col-lg-6 col-sm-6 ">
          <p>Карта сайта</p>
          <a href="#">О нас</a>
          <a href="#">Сотрудничесиво</a>
          <a href="#">Обучение</a>
        </div>
        <div className="footer-map col-lg-6 col-sm-6 ">
          <p>Контакты</p>
          <a href="#">+416516134564</a>
          <a href="#">+546165191616</a>
          <a href="#">+616516546516</a>
          <a href="#">+651616546513</a>
        </div>
        </div>
        <div className="copyright col-lg-12">
          blablablablakek
        </div>
      </div>
      </div>
      </div>
    )
  }
}

Search.propTypes = {
  getSearchResult: PropTypes.func,
}

export default Search

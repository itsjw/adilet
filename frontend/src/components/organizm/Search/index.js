import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: this.props.data || '',
    }
  }
  componentDidMount = () => {
    this.state.searchValue && this.props.getSearchResult(this.state.searchValue)
  }

  handleSearchChange = (e) => {
    this.setState({ searchValue: e.target.value })
    this.props.getSearchResult(e.target.value)
  }

  render() {
    return (
      <div>
        <Link to="/">
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
          </Link>
            <div className="search-wrap">
          <div className="home-form">
            <input
              type="text"
              placeholder="Введите вашу проблему"
              value={this.state.searchValue}
              onChange={this.handleSearchChange}
            />
            <button className="submit">Search</button>
          </div>
          </div>
          <div className="search-content" style={{ color: '#000' }}>
            {
              this.props.help.map((item) => {
                return (
                  <div className="search-content-item" key={item.articleId}>
                    <div className="search-item-header">
                      <Link to="/article"> {item.name}</Link>
                    </div>
                    <div className="search-item-text">
                      <p>{item.content}</p>
                    </div>
                  </div>)
              })
            }
          </div>
        <div className="search-header">
          <h1>Результаты поиска по запросу  "{this.state.searchValue}"</h1>
        </div>
        <div className="search-content-item">
          <div className="search-item-header">
            <Link to="/article">Я подвергся насилию, что мне делать?</Link>
          </div>
          <div className="search-item-text">
            <p>Поэтапная инструкция для жертв, подвергшихся семейному насилию со стороны супруга...</p>
          </div>
        </div>
        <div className="search-content-item">
          <div className="search-item-header">
            <Link to="/article">Где я могу получить юридическую помощь</Link>
          </div>
          <div className="search-item-text">
            <p>Если я испытываю насилие со стороны партнера?В первую очередь, в случае насилия постарайтесь обезопасить себя...</p>
          </div>
        </div>
        <div className="search-content-item">
          <div className="search-item-header">
            <Link to="/article">Как определить место жительства ребенка при разводе? </Link>
          </div>
          <div className="search-item-text">
            <p>Согласно статье 25 Семейного кодекса КР, вопросы, разрешаемые судом при вынесении решения о расторжении брака...</p>
          </div>
        </div>
        <div className="footer">
        <div className="container">
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

        </div>
        <div className="copyright col-lg-12">
          blablablablakek
        </div>
        </div>
      </div>
    )
  }
}

Search.propTypes = {
  getSearchResult: PropTypes.func,
  help: PropTypes.array,
}

export default Search

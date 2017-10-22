import React from 'react'
import PropTypes from 'prop-types'


class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: '',
    }
  }

  handleSearchChange = (e) => {
    this.setState({ searchValue: e.target.value })
    this.props.getSearchResult(e.target.value)
  }

  render() {
    console.log(this.props.help)
    return (
      <div>
        <div className="search-header">
          <div className="search-logo">
            <h1>LOGO</h1>
          </div>
          <div className="search-input">
            <input
              type="text"
              placeholder="searching area"
              value={this.state.searchValue}
              onChange={this.handleSearchChange}
            />
            <button className="btn">Search</button>
          </div>
        </div>
        <div className="search-content" style={{ color: '#000' }}>
          {
            this.props.help.map((item) => {
              return (
                <div className="search-content-item" key={item.articleId}>
                  <h3>{item.name}</h3>
                  <p>{item.category}</p>
                  <p>{item.content}</p>
                </div>)
            })
          }
        </div>
        <div className="footer" />
      </div>
    )
  }
}

Search.propTypes = {
  getSearchResult: PropTypes.func,
  help: PropTypes.array,
}

export default Search

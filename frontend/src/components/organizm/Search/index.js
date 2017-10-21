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
        <div className="search-content">
          <div className="search-content-item">
          </div>
        </div>

      <div className="footer">
      </div>
      </div>
    )
  }
}

Search.propTypes = {
  getSearchResult: PropTypes.func,
}

export default Search

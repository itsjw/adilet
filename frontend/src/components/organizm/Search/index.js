import React from 'react'
import { injectGlobal } from 'styled-components'
import PropTypes from 'prop-types'

injectGlobal`
.search{
  margin: 0;
}
.search-header{
  margin:0 auto;
}
.search-input{
  margin: 0 auto;
}
.search-input input{
  width: 550px;
  height: 40px;
}
.btn{
  height: 40px;
  padding: 0 5px;
  width: 70px;
}
`

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
      <div className="search">
        <div className="search-header">
          <h2>Вам нужна помощь с...</h2>
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
    )
  }
}

Search.propTypes = {
  getSearchResult: PropTypes.func,
}

export default Search

import React from 'react'
import { injectGlobal } from 'styled-components'
import PropTypes from 'prop-types'

injectGlobal`
 .search{

 }
 .search-header{
   padding: 20px;
   margin: 0;
   display:flex;
   justify-content:space-between;
   margin: 0;
   padding:0 40px;
   background: rgb(181,189,200);
   background: -moz-linear-gradient(top, rgba(181,189,200,1) 0%, rgba(130,140,149,1) 36%, rgba(40,52,59,1) 100%);
   background: -webkit-linear-gradient(top, rgba(181,189,200,1) 0%,rgba(130,140,149,1) 36%,rgba(40,52,59,1) 100%);
   background: linear-gradient(to bottom, rgba(181,189,200,1) 0%,rgba(130,140,149,1) 36%,rgba(40,52,59,1) 100%);
   filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b5bdc8', endColorstr='#28343b',GradientType=0 );
 }
 .search-input input{
    height: 29px;
    width:200px;
    border-radius:30px;
    padding-left: 15px;
    border:none;
    border-bottom-right-radius:0;
    border-top-right-radius:0;
    cursor:auto;

 }
 .search-input{
   margin:auto 0;
 }
 .btn {
   width:70px;
   height: 31px;
   border:none;
   border-radius:30px;
   border-bottom-left-radius:0;
   border-top-left-radius:0;
   cursor:pointer;

 }
 .footer{
   height:100px;
   background: rgb(181,189,200);
   background: -moz-linear-gradient(top, rgba(181,189,200,1) 0%, rgba(130,140,149,1) 36%, rgba(40,52,59,1) 100%);
   background: -webkit-linear-gradient(top, rgba(181,189,200,1) 0%,rgba(130,140,149,1) 36%,rgba(40,52,59,1) 100%);
   background: linear-gradient(to bottom, rgba(181,189,200,1) 0%,rgba(130,140,149,1) 36%,rgba(40,52,59,1) 100%);
   filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b5bdc8', endColorstr='#28343b',GradientType=0 );
 }
 .search-content{
   height:500px;
   max-height:auto;

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

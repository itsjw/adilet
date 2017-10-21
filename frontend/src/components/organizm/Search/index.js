import React from 'react'
import {injectGlobal} from 'styled-components'

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

// const Search = () => {
//   return (
//     <div className="search">
//       <div className="search-header">
//         <h1>search-header search-header search-header</h1>
//       </div>
//       <div className="search-input">
//         <input type="text" placeholder="searching area">
//         <button className="btn">Search</button>
//       </div>
//     </div>
//   )
// }

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: ""
    }
  }

  componentDidMount() {
    this.props.fetchHelp()
  }

  render() {
    return (
    <div className="search">
      <div className="search-header">
        <h1>search-header search-header search-header</h1>
      </div>
      <div className="search-input">
        <input type="text" placeholder="searching area" />
        <button className="btn">Search</button>
      </div>
    </div>
  )
  }
}

Footer.propTypes = {}

export default Search

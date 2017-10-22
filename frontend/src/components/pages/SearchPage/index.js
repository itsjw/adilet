// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
// import { Header, Tags, Information, Footer } from 'components'
import { Search } from 'containers'

class SearchPage extends React.Component {
  render() {
    return (
      <div>
        <Search data={this.props.location.state} />
      </div>
    )
  }
}

export default SearchPage

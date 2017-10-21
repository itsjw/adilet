import React from 'react'
import { connect } from 'react-redux'
import { fetchHelp } from 'store/actions'
import { Search } from 'components'

const SearchContainer = props => <Search {...props} />

// const mapStateToProps = store => {
//     return {
//         help: store.help
//     }
// }

const mapStateToProps = state => ({
    help: state.help
})


const mapDispatchToProps = dispatch => ({
  getSearchResult: value => dispatch(fetchHelp(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)

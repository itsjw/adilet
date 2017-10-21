import React from 'react'
import connect from 'react-redux'
import fetchHelp from 'store/actions'
import Search from 'components'

const mapStateToProps = help => {
    return {
      help: store.help
    }
}

const mapDispatchToProps = dispatch => ({
    fetchHelp: () => dispatch(fetchHelp())
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
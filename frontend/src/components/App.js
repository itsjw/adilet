import React from 'react'
import 'flexboxgrid/dist/flexboxgrid.min.css'
import { Switch, Route } from 'react-router-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'
import { HomePage, SearchPage } from 'components'
import theme from './themes/default'


injectGlobal`
  body {
    margin: 0;
  }
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/search" component={SearchPage} exact />
      </Switch>
    </ThemeProvider>
  )
}

export default App

import React from 'react'
import 'flexboxgrid/dist/flexboxgrid.min.css'
import { Switch, Route } from 'react-router-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'
import { HomePage, SearchPage } from 'components'
import theme from './themes/default'
import Helmet from 'react-helmet'


injectGlobal`
  body {
    margin: 0;
  }
`

const App = () => {
  return (
    <div>
    <Helmet titleTemplate="ARc - %s">
       <title>Atomic React</title>
       <meta name="description" content="React starter kit based on Atomic Design with React Router v4, Webpack, Redux, Server Side Rendering and more." />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <meta property="og:site_name" content="ARc" />
       <meta property="og:image" content="https://arc.js.org/thumbnail.png" />
       <meta property="og:image:type" content="image/png" />
       <meta property="og:image:width" content="1200" />
       <meta property="og:image:height" content="630" />
       <link rel="icon" href="https://arc.js.org/icon.png" />
       <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
     </Helmet>
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/search" component={SearchPage} exact />
      </Switch>
    </ThemeProvider>
    </div>
  )
}

export default App

import React from 'react'
import 'flexboxgrid/dist/flexboxgrid.min.css'
import { Switch, Route } from 'react-router-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'
import { HomePage, SearchPage, ArticlePage} from 'components'
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
    <Helmet titleTemplate="%s">
       <title>Адилет - правовой портал</title>
       <meta name="description" content="Вы столкнулись с насилием или нарушением ваших прав и не знаете, куда обратиться? На нашем сайте вы найдете пошаговые инструкции для решения вашей проблемы" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <meta property="og:site_name" content="Адилет" />
       <meta property="og:image" content="/adilet.svg" />
       <meta property="og:image:type" content="image/png" />
       <meta property="og:image:width" content="1200" />
       <meta property="og:image:height" content="630" />
       <link rel="icon" href="adilet.svg" />
       <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
       <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:100" rel="stylesheet" />
       <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
       <link href="style.css" rel="stylesheet" />
     </Helmet>
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/search" component={SearchPage} exact />
        <Route path="/article" component={ArticlePage} exact />
      </Switch>
    </ThemeProvider>
    </div>
  )
}

export default App

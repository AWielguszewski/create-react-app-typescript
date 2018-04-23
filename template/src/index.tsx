import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import MainContainer from './Containers/MainContainer'

ReactDOM.render(
  //a HashRouter replaced standard BrowserRouter in favor of offline support for routing
  <HashRouter>
    <MainContainer />
  </HashRouter>,
  document.getElementById('root') as HTMLElement
)
//here we try to register our service worker if possible
registerServiceWorker()

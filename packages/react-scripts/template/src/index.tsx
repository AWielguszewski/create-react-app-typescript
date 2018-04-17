import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import MainContainer from './Containers/MainContainer'

ReactDOM.render(
  <BrowserRouter>
    <MainContainer />
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
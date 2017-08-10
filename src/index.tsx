import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './css/base.css';
import './css/index.css';
import './css/app.css';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

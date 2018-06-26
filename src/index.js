import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'react-emotion';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    background-color: #ebecf1;
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';

import './util/responsive-rem'
import './style/index.less'

ReactDOM.render(
    <App />,
    document.getElementById('root'),
);
registerServiceWorker();

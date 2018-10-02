import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';

// 响应Rem 布局
import './util/responsive-rem'
// 全局样式导入
import './style/index.less'
// 数据请求支持，基于Promise 的HTTP库
import './http'
//Redux
import './store/store'

ReactDOM.render(
    <App />,
    document.getElementById('root'),
);
// registerServiceWorker();

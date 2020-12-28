import { Provider } from 'react-redux';
import axios from 'axios';
import store from './store/store.js'  //redux需要一个仓库进行存储
import { renderRoutes } from 'react-router-config'
import routes from './router'
import ReactDOM from 'react-dom';
import React, {
  Suspense
} from 'react'

import { Toast } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css';
import {
  HashRouter
} from 'react-router-dom'

React.Component.prototype.$axios = axios;

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Suspense fallback={<div>{Toast.loading('',.1)} </div>}>{renderRoutes(routes)}</Suspense>
    </HashRouter>

  </Provider>, document.getElementById('root'));
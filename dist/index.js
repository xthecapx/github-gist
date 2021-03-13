import * as __SNOWPACK_ENV__ from '../_snowpack/env.js';
import.meta.env = __SNOWPACK_ENV__;

import React from "../_snowpack/pkg/react.js";
import ReactDOM from "../_snowpack/pkg/react-dom.js";
import {store} from "./store/index.js";
import {Provider} from "../_snowpack/pkg/react-redux.js";
import App from "./App.js";
import "./index.css.proxy.js";
import "../_snowpack/pkg/bootstrap/dist/css/bootstrap.min.css.proxy.js";
ReactDOM.render(/* @__PURE__ */ React.createElement(Provider, {
  store
}, /* @__PURE__ */ React.createElement(App, null)), document.getElementById("root"));
if (undefined /* [snowpack] import.meta.hot */ ) {
  undefined /* [snowpack] import.meta.hot */ .accept();
}

import React from "../_snowpack/pkg/react.js";
import {HashRouter as Router, Switch, Route} from "../_snowpack/pkg/react-router-dom.js";
import SearchAndResults from "./features/SearchAndResults/SearchAndResults.js";
import GistDetails from "./features/GistDetails/GistDetails.js";
import SearchForm from "./components/SearchForm.js";
import "./App.css.proxy.js";
function App({}) {
  return /* @__PURE__ */ React.createElement(Router, null, /* @__PURE__ */ React.createElement("div", {
    className: "App"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "header fixed-top"
  }, /* @__PURE__ */ React.createElement(SearchForm, null)), /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/:id",
    component: GistDetails
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "*",
    exact: true,
    component: SearchAndResults
  }))));
}
export default App;

import React from "../../_snowpack/pkg/react.js";
import styles from "./Badges.module.css.proxy.js";
const Badges = ({files}) => {
  let fileArr = [];
  for (let file in files) {
    let language = files[file].language;
    if (fileArr.indexOf(language) === -1) {
      fileArr.push(language);
    }
  }
  return /* @__PURE__ */ React.createElement("ul", {
    className: "d-flex"
  }, fileArr.map((language, index) => {
    return /* @__PURE__ */ React.createElement("li", {
      className: styles.Badge,
      key: index
    }, language);
  }));
};
export default Badges;

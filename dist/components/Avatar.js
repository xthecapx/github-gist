import React from "../../_snowpack/pkg/react.js";
const Avatar = ({
  avatarUrl,
  name
}) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("img", {
    key: "image",
    src: avatarUrl,
    alt: name,
    className: "avatar"
  }), /* @__PURE__ */ React.createElement("span", {
    key: "username",
    className: "text-secondary"
  }, name));
};
export default Avatar;

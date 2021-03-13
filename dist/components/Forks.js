import React from "../../_snowpack/pkg/react.js";
import Avatar from "./Avatar.js";
const Forks = ({forks}) => {
  return /* @__PURE__ */ React.createElement("ul", {
    className: "indent-left"
  }, forks && forks.map((fork, index) => {
    return /* @__PURE__ */ React.createElement("li", {
      key: index
    }, /* @__PURE__ */ React.createElement("a", {
      href: `https://gist.github.com/${fork.id}`,
      target: "_blank"
    }, /* @__PURE__ */ React.createElement(Avatar, {
      avatarUrl: fork.user.avatar_url,
      name: fork.user.login
    })));
  }));
};
export default Forks;

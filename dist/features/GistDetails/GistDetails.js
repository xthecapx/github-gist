import React, {useEffect} from "../../../_snowpack/pkg/react.js";
import {selectedGistSelector} from "../SearchAndResults/SearchAndResultsSlice.js";
import {useHistory} from "../../../_snowpack/pkg/react-router-dom.js";
import Forks from "../../components/Forks.js";
import {gistSelector, gistErrorSelector} from "./GistDetailsSlice.js";
import {getGistDetails} from "./GistDetailsSlice.js";
import {useSelector, useDispatch} from "../../../_snowpack/pkg/react-redux.js";
import styles from "./GistDetails.module.css.proxy.js";
const SearchAndResults = () => {
  const gist = useSelector(selectedGistSelector);
  const dispatch = useDispatch();
  const {forks} = useSelector(gistSelector);
  const error = useSelector(gistErrorSelector);
  const history = useHistory();
  const {description, files, id} = gist;
  useEffect(() => {
    if (id) {
      dispatch(getGistDetails(id));
    } else {
      history.push("/");
    }
  }, []);
  return /* @__PURE__ */ React.createElement("div", {
    className: "container header-space"
  }, /* @__PURE__ */ React.createElement("div", {
    className: styles.DetailsBox
  }, /* @__PURE__ */ React.createElement("p", {
    className: "lead"
  }, description || "No Description"), /* @__PURE__ */ React.createElement("div", {
    className: styles.FilesBox
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-primary"
  }, "Files:"), /* @__PURE__ */ React.createElement("ul", {
    className: "indent-left"
  }, files && Object.values(files).map((file, index) => {
    return /* @__PURE__ */ React.createElement("li", {
      key: index,
      className: "text-secondary"
    }, /* @__PURE__ */ React.createElement("a", {
      href: file.raw_url,
      target: "_blank",
      className: "text-secondary"
    }, file.filename));
  }))), /* @__PURE__ */ React.createElement("div", {
    className: styles.ForksBox
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-primary"
  }, "Forks:"), error && /* @__PURE__ */ React.createElement("span", {
    className: "text-danger indent-left"
  }, "An Error has ocurred"), forks && !error && /* @__PURE__ */ React.createElement(Forks, {
    forks: forks.slice(0, 3)
  }))));
};
export default SearchAndResults;

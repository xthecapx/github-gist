import React from "../../_snowpack/pkg/react.js";
import {useDispatch} from "../../_snowpack/pkg/react-redux.js";
import {useHistory} from "../../_snowpack/pkg/react-router-dom.js";
import {
  selectGist
} from "../features/SearchAndResults/SearchAndResultsSlice.js";
import Badges from "./Badges.js";
import styles from "./GistCard.module.css.proxy.js";
const GistCard = ({gistData}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const noOfFiles = Object.keys(gistData.files).length;
  return /* @__PURE__ */ React.createElement("li", {
    className: styles.ListRow,
    onClick: () => {
      dispatch(selectGist(gistData));
      history.push(`/${gistData.id}`);
    }
  }, /* @__PURE__ */ React.createElement("p", {
    className: "lead"
  }, gistData.description || "No Description"), /* @__PURE__ */ React.createElement("p", {
    className: "text-secondary"
  }, noOfFiles, " ", noOfFiles > 1 ? "Files" : "File"), /* @__PURE__ */ React.createElement(Badges, {
    files: gistData.files
  }));
};
export default GistCard;

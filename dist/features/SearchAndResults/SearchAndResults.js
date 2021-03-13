import React from "../../../_snowpack/pkg/react.js";
import {gistsSelector} from "./SearchAndResultsSlice.js";
import {useSelector} from "../../../_snowpack/pkg/react-redux.js";
import GistCard from "../../components/GistCard.js";
const SearchAndResults = () => {
  const gists = useSelector(gistsSelector);
  return /* @__PURE__ */ React.createElement("ul", {
    className: "container header-space"
  }, gists && gists.length > 0 && gists.map((gist, index) => {
    return /* @__PURE__ */ React.createElement(GistCard, {
      key: gist.id,
      gistData: gist
    });
  }));
};
export default SearchAndResults;

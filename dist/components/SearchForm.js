import React, {useState} from "../../_snowpack/pkg/react.js";
import {useDispatch} from "../../_snowpack/pkg/react-redux.js";
import {getUserPublicGists} from "../features/SearchAndResults/SearchAndResultsSlice.js";
const SearchForm = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (user.length === 0) {
      return;
    }
    dispatch(getUserPublicGists(user));
  };
  return /* @__PURE__ */ React.createElement("form", {
    onSubmit: handleSubmit,
    className: "searchform mt-3"
  }, /* @__PURE__ */ React.createElement("input", {
    className: "form-control",
    type: "text",
    placeholder: "Search for a user, eg. xthecapx.",
    value: user,
    onChange: (e) => setUser(e.target.value)
  }));
};
export default SearchForm;

import {configureStore} from "../../_snowpack/pkg/@reduxjs/toolkit.js";
import searchAndResults from "../features/SearchAndResults/SearchAndResultsSlice.js";
import gistDetails from "../features/GistDetails/GistDetailsSlice.js";
export const store = configureStore({
  reducer: {
    searchAndResults,
    gistDetails
  }
});

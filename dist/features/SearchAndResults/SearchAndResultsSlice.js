import * as __SNOWPACK_ENV__ from '../../../_snowpack/env.js';

import {createSlice} from "../../../_snowpack/pkg/@reduxjs/toolkit.js";
const BaseUrl = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_API_URL;
const initialState = {
  data: [],
  selectedGist: {}
};
export const gistsSlice = createSlice({
  name: "gists",
  initialState,
  reducers: {
    addGists: (state, action) => {
      state.data = action.payload;
    },
    selectGist: (state, action) => {
      state.selectedGist = action.payload;
    }
  }
});
export const {addGists, selectGist} = gistsSlice.actions;
export const getUserPublicGists = (userName) => async (dispatch) => {
  let gistData = await fetch(`${BaseUrl}/users/${userName}/gists`);
  let data = await gistData.json();
  dispatch(addGists(data));
};
export const gistsSelector = (state) => state.searchAndResults.data;
export const selectedGistSelector = (state) => state.searchAndResults.selectedGist;
export default gistsSlice.reducer;

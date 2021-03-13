import * as __SNOWPACK_ENV__ from '../../../_snowpack/env.js';

import {createSlice} from "../../../_snowpack/pkg/@reduxjs/toolkit.js";
const BaseUrl = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_API_URL;
const initialState = {
  data: {},
  error: false
};
export const slice = createSlice({
  name: "gist",
  initialState,
  reducers: {
    gist: (state, action) => {
      state.data = action.payload;
    },
    error: (state, action) => {
      state.error = action.payload;
    }
  }
});
export const {gist, error} = slice.actions;
export const getGistDetails = (gistId) => async (dispatch) => {
  let data;
  debugger;
  try {
    let gistData = await fetch(`${BaseUrl}/gists/${gistId}`);
    data = await gistData.json();
    dispatch(gist(data));
    dispatch(error(false));
  } catch (e) {
    dispatch(error(true));
  }
};
export const gistSelector = (state) => state.gistDetails.data;
export const gistErrorSelector = (state) => state.gistDetails.error;
export default slice.reducer;

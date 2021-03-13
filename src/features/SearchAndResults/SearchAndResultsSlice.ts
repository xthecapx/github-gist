import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AppThunk, RootState } from '../../store';

const BaseUrl = import.meta.env.SNOWPACK_PUBLIC_API_URL;

export interface File {
  filename: string;
  language: string;
  raw_url: string;
  size: number;
  type: string;
}

export interface Files {
  [name: string]: File;
}

export interface Gist {
  id: string;
  files: Files;
  description: string;
}

interface GistState {
  data: Gist[];
  selectedGist: Partial<Gist>;
}

const initialState: GistState = {
  data: [],
  selectedGist: {},
};

export const gistsSlice = createSlice({
  name: 'gists',
  initialState,
  reducers: {
    addGists: (state, action: PayloadAction<[]>) => {
      state.data = action.payload;
    },
    selectGist: (state, action: PayloadAction<Gist>) => {
      state.selectedGist = action.payload;
    },
  },
});

export const { addGists, selectGist } = gistsSlice.actions;

export const getUserPublicGists = (userName: string): AppThunk => async (
  dispatch,
) => {
  let gistData = await fetch(`${BaseUrl}/users/${userName}/gists`);
  let data = await gistData.json();

  dispatch(addGists(data));
};

export const gistsSelector = (state: RootState) => state.searchAndResults.data;
export const selectedGistSelector = (state: RootState) =>
  state.searchAndResults.selectedGist;

export default gistsSlice.reducer;

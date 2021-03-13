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

export interface Fork {
  id: string;
  user: {
    avatar_url: string;
    login: string;
  };
}

export interface Gist {
  id: string;
  files: Files;
  description: string;
  forks: Fork[];
}

interface InitialState {
  data: Partial<Gist>;
  error: boolean;
}

const initialState: InitialState = {
  data: {},
  error: false,
};

export const slice = createSlice({
  name: 'gist',
  initialState,
  reducers: {
    gist: (state, action: PayloadAction<Gist>) => {
      state.data = action.payload;
    },
    error: (state, action: PayloadAction<boolean>) => {
      state.error = action.payload;
    },
  },
});

export const { gist, error } = slice.actions;

export const getGistDetails = (gistId: string): AppThunk => async (
  dispatch,
) => {
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

export const gistSelector = (state: RootState) => state.gistDetails.data;
export const gistErrorSelector = (state: RootState) => state.gistDetails.error;

export default slice.reducer;

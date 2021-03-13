import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import searchAndResults from '../features/SearchAndResults/SearchAndResultsSlice';
import gistDetails from '../features/GistDetails/GistDetailsSlice';

export const store = configureStore({
  reducer: {
    searchAndResults,
    gistDetails
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

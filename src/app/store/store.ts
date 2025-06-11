import { configureStore, combineReducers } from "@reduxjs/toolkit";
import moviesReducer from './moviesSlice';

const rootReducer = combineReducers({
  movies: moviesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

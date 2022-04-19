import { configureStore } from "@reduxjs/toolkit";
import filterReducer from './slices/filterSlice';

const store = configureStore({
  reducer: {
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
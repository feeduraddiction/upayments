import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@store/store";

interface filterState {
  searchInput: string;
  categoryInput: string;
}

const initialState: filterState = {
  searchInput: "",
  categoryInput: "",
};

const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    searchInput(state, action: PayloadAction<string>) {
      state.searchInput = action.payload;
    },
    categoryInput(state, action: PayloadAction<string>) {
      state.categoryInput = action.payload;
    },
  },
});

export const searchInputAction = filterSlice.actions.searchInput;
export const categoryInputAction = filterSlice.actions.categoryInput;

export const selectSearchInput = (state: RootState) => state.filter.searchInput;
export const selectCategoryInput = (state: RootState) =>
  state.filter.categoryInput;

export default filterSlice.reducer;

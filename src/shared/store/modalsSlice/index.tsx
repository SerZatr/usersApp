import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IModalsSlice } from "./interface";

export const initialState: IModalsSlice = {
  filtersModal: false,
};

export const modalsSlice = createSlice({
  name: "modalsSlice",
  initialState: initialState,
  reducers: {
    setFilterDisplay(state, action: PayloadAction<boolean>) {
      state.filtersModal = action.payload;
    },
  },
});

export const { setFilterDisplay } = modalsSlice.actions;

export const modalsReducer = modalsSlice.reducer;

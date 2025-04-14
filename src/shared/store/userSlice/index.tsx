import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ISetCurrentUser,
  ISetFilter,
  ISetUserData,
  IUserSlice,
} from "./interface";

export const initialState: IUserSlice = {
  areUsersLoading: false,
  areUsersLoadingError: false,
  areUsersLoaded: false,
  users: [],
  filters: {},
  searchQuery: "",
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState: initialState,
  reducers: {
    setUsersData(state, action: PayloadAction<ISetUserData>) {
      state.users = action.payload.users;
    },
    setCurrentUser(state, action: PayloadAction<ISetCurrentUser>) {
      state.currentUserId = action.payload.id;
    },
    clearCurrentUser(state) {
      delete state.currentUserId;
    },
    setAreUsersLoading(state, action: PayloadAction<boolean>) {
      state.areUsersLoading = action.payload;
    },
    setAreUsersLoaded(state, action: PayloadAction<boolean>) {
      state.areUsersLoaded = action.payload;
    },
    setAreUsersLoadingError(state, action: PayloadAction<boolean>) {
      state.areUsersLoadingError = action.payload;
    },
    setFilter(state, action: PayloadAction<ISetFilter>) {
      const { name, value } = action.payload;
      if (value) {
        state.filters[name] = value;
      } else {
        delete state.filters[name];
      }
    },
    setSearchQuery(state, action: PayloadAction<string | undefined>) {
      state.searchQuery = action.payload;
    },
  },
});

export const {
  setUsersData,
  setCurrentUser,
  clearCurrentUser,
  setAreUsersLoading,
  setAreUsersLoaded,
  setAreUsersLoadingError,
  setFilter,
  setSearchQuery,
} = userSlice.actions;

export const usersReducer = userSlice.reducer;

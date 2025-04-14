// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../../models/user";
import {
  setAreUsersLoaded,
  setAreUsersLoading,
  setAreUsersLoadingError,
  setUsersData,
} from "../../store/userSlice";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<IUser[], void>({
      query: () => ({ url: "users" }),
      async onQueryStarted(
        _arg,
        { dispatch, queryFulfilled, getCacheEntry, updateCachedData }
      ) {
        try {
          dispatch(setAreUsersLoadingError(false));
          dispatch(setAreUsersLoading(true));
          const { data } = await queryFulfilled;
          dispatch(setUsersData({ users: data }));
          dispatch(setAreUsersLoaded(true));
        } catch {
          dispatch(setAreUsersLoadingError(true));
        } finally {
          dispatch(setAreUsersLoaded(true));
          dispatch(setAreUsersLoading(false));
        }
      },
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { usersReducer } from "./userSlice";
import { usersApi } from "../api/users";
import storage from "redux-persist/es/storage";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { modalsReducer } from "./modalsSlice";

const rootReducer = combineReducers({
  users: usersReducer,
  modals: modalsReducer,
  [usersApi.reducerPath]: usersApi.reducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(usersApi.middleware),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type TAppStore = typeof store;
export type TDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<TDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useParamSelector = (selector: any, ...params: any) =>
  useAppSelector((state) => selector(state, ...params));

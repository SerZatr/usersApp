import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IUser } from "../../models/user";

const createParamSelector = (selector: any) => {
  return (_: any, params: any) => selector(params);
};

const getId = createParamSelector((params: { id: number }) => params.id);

export const createTypedDraftSafeSelector =
  createDraftSafeSelector.withTypes<RootState>();

export const selectUserById = createDraftSafeSelector(
  (state) => state.users.users,
  getId,
  (users: IUser[], id: number) => {
    const user = users.find((user) => user.id === id);
    return user;
  }
);

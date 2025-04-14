import { IUser } from "../../models/user";

export interface IUserSlice {
  areUsersLoading: boolean;
  areUsersLoadingError: boolean;
  areUsersLoaded: boolean;
  users: IUser[];
  currentUserId?: number;
  filters: { [name: string]: string };
  searchQuery?: string;
}

export interface ISetUserData {
  users: IUser[];
}

export interface ISetCurrentUser {
  id: number;
}

export interface ISetFilter {
  name: string;
  value?: string;
}

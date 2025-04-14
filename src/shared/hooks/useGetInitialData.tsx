import React from "react";
import { useAppSelector } from "../store/store";

export const getInitialData = () => {
  const users = useAppSelector((store) => store.users);

  React.useEffect(() => {
    if (!users.areUsersLoaded) {
    }
  }, []);
};

import { useGetUsersQuery } from "../../../shared/api/users";
import { Icon } from "../../../shared/ui/icon";

export const RefreshButton = () => {
  const update = useGetUsersQuery();
  return (
    <Icon
      onClick={() => {
        update.refetch();
      }}
      title="Обновить данные"
    >
      ↻
    </Icon>
  );
};

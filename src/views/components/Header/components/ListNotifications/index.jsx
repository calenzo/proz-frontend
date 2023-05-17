import { Button, HeaderNotification } from "views/components";

import { useListNotifications } from "./useListNotifications";
import { EmptyNotifications } from "..";

import * as S from "./styles";

export const ListNotifications = ({
  notifications = [],
  onClose = () => {},
}) => {
  const { hasNotification, isAvailableToVewMore, redirectToNotifications } =
    useListNotifications({ notifications });

  return (
    <S.Container onClick={(event) => onClose(event)}>
      <S.List>
        {hasNotification &&
          notifications?.map((notification) => (
            <HeaderNotification
              title={notification.title}
              createdAt={notification.createdAt}
            />
          ))}

        {!hasNotification && <EmptyNotifications />}
        <S.Divider />

        <Button
          disabled={!isAvailableToVewMore}
          onClick={() => redirectToNotifications()}
          variant="outline"
        >
          VER TODAS
        </Button>
      </S.List>
    </S.Container>
  );
};

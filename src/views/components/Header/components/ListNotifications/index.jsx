import { useLocation, useNavigate } from "react-router-dom";

import { Button, HeaderNotification } from "views/components";
import { Config } from "application/constant";

import * as S from "./styles";

export const ListNotifications = ({
  notifications = [],
  onClose = () => {},
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { ROUTES } = Config;

  const hasNotification = !!notifications.length;

  if (!hasNotification) return null;

  const isAvailableToVewMore = location.pathname !== `/${ROUTES.NOTIFICATIONS}`;

  return (
    <S.Container onClick={(event) => onClose(event)}>
      <S.List>
        {notifications.map((notification) => (
          <HeaderNotification
            title={notification.title}
            createdAt={notification.createdAt}
          />
        ))}

        <S.Divider />

        <Button
          disabled={!isAvailableToVewMore}
          onClick={() => navigate(ROUTES.NOTIFICATIONS)}
          variant="outline"
        >
          VER TODAS
        </Button>
      </S.List>
    </S.Container>
  );
};

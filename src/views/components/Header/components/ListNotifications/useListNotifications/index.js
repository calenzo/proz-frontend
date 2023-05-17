import { useLocation, useNavigate } from "react-router-dom";

import { Config } from "application/constant";

export const useListNotifications = ({ notifications }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { ROUTES } = Config;

  const hasNotification = !!notifications?.length;

  const isAvailableToVewMore =
    location.pathname !== `/${ROUTES.NOTIFICATIONS}` && hasNotification;

  const redirectToNotifications = () => navigate(ROUTES.NOTIFICATIONS);

  return {
    hasNotification,
    isAvailableToVewMore,
    redirectToNotifications,
  };
};

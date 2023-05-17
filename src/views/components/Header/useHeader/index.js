/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useNotificationsService } from "infrastructure/services";
import { convertNotificationToUse } from "infrastructure/handlers";

export const useHeader = () => {
  const navigate = useNavigate();
  const { getNotifications } = useNotificationsService();

  const [notifications, setNotifications] = useState([]);
  const [openList, setOpenList] = useState(false);

  const user = {
    name: "João da Silva",
    profession: "Professor",
  };

  const toggleList = () => {
    setOpenList((prev) => !prev);
  };

  const handleCloseListNotifications = () => {
    setOpenList(false);
  };

  useEffect(() => {
    if (!openList) return;

    getNotifications().then((transactions) => {
      const values = transactions?.length
        ? transactions?.map((transaction) =>
            convertNotificationToUse(transaction)
          )
        : [];

      setNotifications(values?.slice(0, 3));
    });
  }, [openList]);

  const handleLogo = () => {
    navigate("/");
  };

  const handleMenu = () => {};

  return {
    user,
    notifications,
    toggleList,
    openList,
    handleLogo,
    handleMenu,
    handleCloseListNotifications,
  };
};

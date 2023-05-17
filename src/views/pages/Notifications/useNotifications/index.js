/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import { useNotificationsService } from "infrastructure/services";
import { convertNotificationToUse } from "infrastructure/handlers";

export const useNotifications = () => {
  const { getNotifications } = useNotificationsService();

  const [excludeModal, setExcludeModal] = useState({
    isOpen: false,
    entityId: null,
  });
  const [notificationModal, setNotificationModal] = useState({
    isOpen: false,
    notification: {},
  });
  const [notifications, setNotifications] = useState([]);
  const [updatedData, setUpdatedData] = useState(false);

  const hasNotification = !!notifications?.length;

  const handleCloseExcludeModal = () => {
    setExcludeModal({ isOpen: false, entityId: null });
  };

  const handleCloseNotificationModal = () => {
    setNotificationModal({ isOpen: false, entityId: null });
  };

  const handleOpenExcludeNotification = (entityId) => {
    setExcludeModal({
      isOpen: true,
      entityId,
    });
  };

  const handleOpenNotificationModal = (notification) => {
    setNotificationModal({
      isOpen: true,
      notification,
    });
  };

  const callbackUpdateData = () => {
    setUpdatedData(false);
  };

  useEffect(() => {
    if (updatedData) return;

    getNotifications().then((transactions) => {
      const values = transactions?.length
        ? transactions?.map((transaction) =>
            convertNotificationToUse(transaction)
          )
        : [];

      setNotifications(values);
      setUpdatedData(true);
    });
  }, [updatedData]);

  return {
    hasNotification,
    notifications,
    excludeModal,
    notificationModal,
    handleOpenExcludeNotification,
    handleOpenNotificationModal,
    handleCloseExcludeModal,
    handleCloseNotificationModal,
    callbackUpdateData,
  };
};

import { useState } from "react";

import { notifications } from "application/__mocks__/notifications";

export const useHome = () => {
  const [excludeModal, setExcludeModal] = useState({
    isOpen: false,
    entityId: null,
  });

  const hasNotification = !!notifications?.length;

  const handleCloseModal = () => {
    setExcludeModal({ isOpen: false, entityId: null });
  };

  const handleDeleteNotification = (entityId) => {
    setExcludeModal({ isOpen: true, entityId });
  };
    notifications,
    excludeModal,
    handleDeleteNotification,
    handleCloseModal,

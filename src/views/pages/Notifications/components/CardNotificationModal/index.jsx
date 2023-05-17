/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { useNotificationsService } from "infrastructure/services";
import { Modal } from "views/components";

import { CardNotification } from "../CardNotification";

export const CardNotificationModal = ({
  isOpen = true,
  onClose = () => {},
  entityId,
  title,
  createdAt,
  describe,
  isRead,
  callbackSuccess = () => {},
}) => {
  const { readNotification } = useNotificationsService();

  useEffect(() => {
    if (isRead || !isOpen) return;

    readNotification(entityId).then(() => {
      callbackSuccess();
    });
  }, [isOpen]);

  return (
    <Modal padding="0px" width="496px" isOpen={isOpen} onClose={onClose}>
      <CardNotification
        entityId={entityId}
        title={title}
        createdAt={createdAt}
        describe={describe}
        handleExit={onClose}
      />
    </Modal>
  );
};

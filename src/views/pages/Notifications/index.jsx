import { ExcludeMessageModal } from "views/components";

import { useNotifications } from "./useNotifications";
import {
  AlarmMessage,
  CardNotification,
  CardNotificationModal,
} from "./components";

import * as S from "./styles";

export const Notifications = () => {
  const {
    hasNotification,
    notifications,
    excludeModal,
    notificationModal,
    handleOpenExcludeNotification,
    handleOpenNotificationModal,
    handleCloseExcludeModal,
    handleCloseNotificationModal,
    callbackUpdateData,
  } = useNotifications();

  return (
    <S.Container data-testid="notifications">
      <S.Title>Notificações</S.Title>

      <S.Divider />

      {!hasNotification && (
        <AlarmMessage message="Você não possui notificações recentes." />
      )}

      {hasNotification && (
        <S.Notifications>
          {notifications?.map((notification, index) => (
            <CardNotification
              key={index}
              hasBoxShadow
              hasActionRead
              hasActionExclude
              handleOpenNotificationModal={() =>
                handleOpenNotificationModal({ ...notification })
              }
              handleOpenExcludeNotification={() =>
                handleOpenExcludeNotification({ ...notification })
              }
              {...notification}
            />
          ))}
        </S.Notifications>
      )}

      <ExcludeMessageModal
        entityId={excludeModal?.entityId}
        isOpen={excludeModal?.isOpen}
        onClose={() => handleCloseExcludeModal()}
        callbackSuccess={callbackUpdateData}
      />

      <CardNotificationModal
        isOpen={notificationModal?.isOpen}
        onClose={handleCloseNotificationModal}
        callbackSuccess={callbackUpdateData}
        {...notificationModal.notification}
      />
    </S.Container>
  );
};

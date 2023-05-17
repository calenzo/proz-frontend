import { ExcludeMessageModal } from "views/components";

import { useHome } from "./useHome";
import { AlarmMessage, CardNotification } from "./components";

import * as S from "./styles";

export const Home = () => {
  const {
    hasNotification,
    notifications,
    excludeModal,
    handleDeleteNotification,
    handleReadNotification,
    handleCloseModal,
  } = useHome();

  return (
    <S.Container>
      <S.Title>Notificações</S.Title>

      <S.Divider />

      {!hasNotification && (
        <AlarmMessage message="Você não possui notificações recentes." />
      )}

      {hasNotification && (
        <S.Notifications>
          {notifications?.map((notification) => (
            <CardNotification
              handleReadNotification={handleReadNotification}
              handleDeleteNotification={handleDeleteNotification}
              {...notification}
            />
          ))}
        </S.Notifications>
      )}
      <ExcludeMessageModal
        isOpen={excludeModal?.isOpen}
        onClose={() => handleCloseModal()}
      />
    </S.Container>
  );
};
